// React
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Pages
import Home from "./pages/home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/signup/Signup";
import Projects from "./pages/projects/Projects";
import Project from "./pages/project/Project";
import NewProject from "./pages/new-project/NewProject";

// components
import Navbar from "./components/navbar/Navbar";
import { GlobalStyles } from "./global-style/Global.styled";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <GlobalStyles />
        {/* <Navbar /> */}

        <Routes>
          <Route exact="true" path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/projects" element={<Projects />}>
            <Route path="/projects/:id" element={<Project />} />
          </Route>
          <Route path="/newproject" element={<NewProject />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
