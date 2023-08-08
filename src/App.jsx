import { Routes, Route, useLocation } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import { DataContextProvider } from "./context/DataContext";
import Header from "./components/Header/index";
import Footer from "./components/Others/Footer";
import Missing from "./components/Others/Missing";
import Home from "./components/Home/index";
import TravelList from "./components/Home/Travel/TravelList";
import PlanYourTrip from "./components/Home/Travel/PlanYourTrip";
import TopTips from "./components/Home/Travel/TopTips";
import About from "./components/About/index";
import Blog from "./components/Blog/BlogPage/index";
import NewPost from "./components/Blog/Crud/NewPost";
import PostPage from "./components/Blog/SinglePost/PostPage";
import Contact from "./components/Others/Contact";
import SignIn from "./components/Registration/SignIn";
import SignUp from "./components/Registration/SignUp";
import AccountPage from "./components/Registration/AccountPage";
import ProtectedRoute from "./components/Registration/ProtectedRoute";
import UserProfile from "./components/Registration/UserProfile";
import { useEffect } from "react";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location]);

  return null;
};

const App = () => {
  return (
    <div className="mainContainer">
      <DataContextProvider>
        <AuthContextProvider>
          <Header />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/travelList" element={<TravelList />} />
            <Route path="/planYourTrip" element={<PlanYourTrip />} />
            <Route path="/topTips" element={<TopTips />} />
            <Route path="about" element={<About />} />
            <Route path="blog" element={<Blog />} />
            <Route path="article" element={<NewPost />} />
            <Route path="article/:id" element={<PostPage />} />
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
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <UserProfile />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<Missing />} />
            <Route />
          </Routes>
          <Footer />
        </AuthContextProvider>
      </DataContextProvider>
    </div>
  );
};

export default App;
