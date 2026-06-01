import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import NewsCard from "./Components/NewsCard";
import Login from "./Pages/Admin/Login";
import Dashboard from "./Pages/Admin/Dashboard";
import Home from "./Pages/Home";
import CategoryPage from "./Pages/CategoryPage";
import SingleNews from "./Pages/SingleNews";
import CreateNews from "./Pages/Admin/CreateNews";
import AdminLayout from "./Layouts/AdminLayout";
import AllPosts from "./Pages/Admin/AllPosts";
import EditNews from "./Pages/Admin/EditNews";
import Profile from "./Pages/Admin/Profile";
import ProtectedRoutes from "./Components/ProtectedRoutes";
import Drafts from "./Pages/Admin/Drafts";
import Register from "./Pages/Admin/Register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:category" element={<CategoryPage />} />
        <Route path="/news/:id" element={<SingleNews />} />
        {/* Admin routes nested */}
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/register"element={<Register />}/>
        <Route path="/admin" element={
          <ProtectedRoutes>
            <AdminLayout />
          </ProtectedRoutes>
        }>
          <Route index element={<Dashboard />} />
          <Route path="create-news" element={<CreateNews />} />
          <Route path="/admin/allposts" element={<AllPosts/>}/>
          <Route path="/admin/edit-news/:id" element={<EditNews/>}/>
          <Route path="/admin/drafts" element={<Drafts/>}/>
          <Route path="profile" element={<Profile/>}/>

        </Route>
      </Routes>
    </>
  );
}

export default App;
