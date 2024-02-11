import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PrivateRoutes from "./components/PrivateRoutes.jsx";
import CreatePost from "./pages/CreatePost.jsx";
import OnlyAdminPrivateRoute from "./components/OnlyAdminPrivateRoute.jsx";
import UpdatePost from "./pages/UpdatePost.jsx";
import PostPage from './pages/PostPage';
import ScrollToTop from "./components/ScrollToTop.jsx";
import Search from "./pages/Search.jsx";


function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/search" element={<Search />} />

        <Route element={<PrivateRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route element={<OnlyAdminPrivateRoute/>}>
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/update-post/:postId" element={<UpdatePost />} />

        </Route>

        <Route path="/projects" element={<Projects />} />
        <Route path='/post/:postSlug' element={<PostPage />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
