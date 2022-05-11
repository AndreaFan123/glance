// React
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Pages
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/Login/Login";
import Signup from "./pages/signup/Signup";
import Projects from "./pages/projects/Projects";
import Project from "./pages/project/Project";
import Member from "./pages/mamber/Member";
import NewProject from "./pages/new-project/NewProject";
import LandingPage from "./pages/landingPage/LandingPage";

// components
import { GlobalStyles } from "./global-style/Global.styled";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <GlobalStyles />
        {/* <Navbar /> */}

        <Routes>
          <Route exact="true" path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/projects" element={<Projects />}>
            <Route path="/projects/:id" element={<Project />} />
          </Route>
          <Route path="/user" element={<Member />} />
          <Route path="/newproject" element={<NewProject />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
