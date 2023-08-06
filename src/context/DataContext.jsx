import { createContext, useContext, useEffect, useState } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";

const DataContext = createContext();

const DataContextProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // fetch data
  useEffect(() => {
    const articleRef = collection(db, "Articles");
    const q = query(articleRef, orderBy("datetime", "desc"));

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const articles = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setArticles(articles);
        setSearchResults(articles); // Initialize searchResults with all articles on first load
        setIsLoading(false);
        setError(null);
      },
      (error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
        setError("Error fetching data. Please try again later.");
      }
    );

    return () => unsubscribe(); // Cleanup the listener when the component unmounts
  }, []);

  // search for posts
  useEffect(() => {
    const filteredResults = articles.filter(
      (article) =>
        article.body.toLowerCase().includes(search.toLowerCase()) ||
        article.title.toLowerCase().includes(search.toLowerCase())
    );

    setSearchResults(filteredResults);
  }, [articles, search]);

  // Add the deleteArticle function
  const deleteArticle = (id) => {
    setArticles((prevArticles) =>
      prevArticles.filter((article) => article.id !== id)
    );
  };

  return (
    <DataContext.Provider
      value={{
        articles: searchResults,
        search,
        setSearch,
        isLoading,
        error,
        deleteArticle,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

const useData = () => {
  const context = useContext(DataContext);
  return context;
};

export { DataContextProvider, useData };
