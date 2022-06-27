import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AboutPage from "./src/pages/AboutPage";
import HomePage from "./src/pages/HomePage";
import LoginPage from "./src/pages/LoginPage";

import NavBar from "./components/NavBar";

const AppRouter = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/about" element={<AboutPage />} />
        <Route exact path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
