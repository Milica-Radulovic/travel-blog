import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { format } from "date-fns";
import api from "./api/posts";

import Footer from "./components/Others/Footer";
import Missing from "./components/Others/Missing";
import Home from "./components/Home/index";
import Blog from "./components/Blog/index";
import NewPost from "./components/Blog/NewPost";
import PostPage from "./components/Blog/PostPage";
import Contact from "./components/Others/Contact";
import Header from "./components/Header/Header";

const App = () => {
    const [posts, setPosts] = useState([]);
    const [search, setSearch] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [formValues, setFormValues] = useState({
        image: "",
        title: "",
        author: "",
        description: "",
        body: "",
    });

    const navigate = useNavigate();

    const inputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    // fetch data
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await api.get("/posts");
                setPosts(response.data);
            } catch (err) {
                if (err.response) {
                    // Not in the 200 response range
                    console.log(err.response.data);
                    console.log(err.response.status);
                    console.log(err.response.headers);
                } else {
                    console.log(`Error: ${err.message}`);
                }
            }
        };

        fetchPosts();
    }, []);

    // search for posts
    useEffect(() => {
        const filteredResults = posts.filter(
            (post) =>
                post.body.toLowerCase().includes(search.toLowerCase()) ||
                post.title.toLowerCase().includes(search.toLowerCase())
        );

        setSearchResults(filteredResults.reverse());
    }, [posts, search]);

    // submit new post
    const handleSubmit = async (e) => {
        e.preventDefault();
        const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
        const datetime = format(new Date(), "MMMM dd, yyyy pp");

        const newPost = {
            id,
            image: formValues.image,
            title: formValues.title,
            author: formValues.author,
            datetime,
            description: formValues.description,
            body: formValues.body,
        };

        try {
            const response = await api.post("/posts", newPost);
            const allPosts = [...posts, response.data];
            setPosts(allPosts);
            setFormValues("");
            navigate("/");
        } catch (err) {
            console.log(`Error: ${err.message}`);
        }
    };

    // delete post
    const handleDelete = async (id) => {
        try {
            await api.delete(`/posts/${id}`);
            const postsList = posts.filter((post) => post.id !== id);
            setPosts(postsList);
            navigate("/");
        } catch (err) {
            console.log(`Error: ${err.message}`);
        }
    };

    return (
        <div className="mainContainer">
            <Header />
            {/* <Navbar search={search} setSearch={setSearch} />  Remember to trnasfer props to another component*/}

            <Routes>
                <Route path="/" element={<Home posts={searchResults} />} />
                <Route path="blog" element={<Blog posts={searchResults} />} />
                <Route
                    path="post"
                    element={
                        <NewPost
                            handleSubmit={handleSubmit}
                            inputChange={inputChange}
                            formValues={formValues}
                            setFormValues={setFormValues}
                        />
                    }
                />
                <Route
                    path="post/:id"
                    element={
                        <PostPage posts={posts} handleDelete={handleDelete} />
                    }
                />
                <Route path="contact" element={<Contact />} />
                <Route path="*" element={<Missing />} />
                <Route />
            </Routes>
            <Footer />
        </div>
    );
};

export default App;
