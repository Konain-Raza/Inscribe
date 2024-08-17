import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Auth from "./pages/Auth";
import CreateBlog from "./pages/CreatePost";
import Footer from "./Components/Footer";
import Dashboard from "./pages/Dashboard";
import BlogDetail from "./pages/BlogDetail.jsx";
import ErrorPage from "./pages/Error";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useStore from './Store.js';
import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebase-config.js";

const App = () => {
  const setUser = useStore((state) => state.setUser);
  const user = useStore((state) => state.user);

  useEffect(() => {
    const fetchUserData = async () => {
      const cookies = document.cookie.split("; ");
      const uidCookie = cookies.find((row) => row.startsWith("user_uid="));
      if (uidCookie) {
        const uid = uidCookie.split("=")[1];
        try {
          const userDoc = await getDoc(doc(db, "users", uid));
          if (userDoc.exists()) {
            const userData = userDoc.data();
            setUser({
              uid: userDoc.id,
              email: userData.email,
              displayName: userData.username || "",
              photoURL: userData.avatar || "",
            });
          } else {
            toast.error("No such user document!");
          }
        } catch (error) {
          toast.error("Error fetching user data.");
        }
      }
    };

    fetchUserData();
  }, [setUser]);

  const ProtectedRoute = ({ element }) => {
    return user && user.email ? element : <Navigate to="/" />;
  };

  const PublicRoute = ({ element }) => {
    return !user || !user.email ? element : <Navigate to="/" />;
  };

  return (
    <Router className="bg-gray-900">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/auth" element={<PublicRoute element={<Auth />} />} />
        <Route path="/createpost" element={<ProtectedRoute element={<CreateBlog />} />} />
        <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Router>
  );
};

export default App;
