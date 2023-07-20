import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Others/Footer";
import Missing from "./components/Others/Missing";
import Home from "./components/Home/index";
import TravelList from "./components/Home/TravelList";
import TopTravelTips from "./components/Home/TopTravelTips";
import PlanTrip from "./components/Home/PlanTrip";
import About from "./components/About/AboutUs";
import Blog from "./components/Blog/index";
import NewPost from "./components/Blog/NewPost";
import PostPage from "./components/Blog/PostPage";
import Contact from "./components/Others/Contact";
import Header from "./components/Header/Header";
import SignIn from "./components/Registration/SignIn";
import SignUp from "./components/Registration/SignUp";
import AccountPage from "./components/Registration/AccountPage";
import Profile from "./components/Registration/Profile";
import ProtectedRoute from "./components/Registration/ProtectedRoute";
import { AuthContextProvider } from "./context/AuthContext";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "./firebase";

const App = () => {
  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const articleRef = collection(db, "Articles");
    const q = query(articleRef, orderBy("datetime", "desc"));
    onSnapshot(q, (snapshot) => {
      const articles = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setArticles(articles);
      console.log(articles);
    });
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

  return (
    <div className="mainContainer">
      <AuthContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home articles={articles} />} />

          <Route path="/travelList" element={<TravelList />} />
          <Route path="/topTips" element={<TopTravelTips />} />
          <Route path="/planTrip" element={<PlanTrip />} />
          <Route path="about" element={<About />} />
          <Route
            path="blog"
            element={
              <Blog
                articles={searchResults}
                search={search}
                setSearch={setSearch}
              />
            }
          />
          <Route path="article" element={<NewPost />} />
          <Route
            path="article/:id"
            element={<PostPage articles={articles} />}
          />
          <Route path="contact" element={<Contact />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <AccountPage />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Missing />} />
          <Route />
        </Routes>
        <Footer />
      </AuthContextProvider>
    </div>
  );
};

export default App;
