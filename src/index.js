import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about"  element={<About />} />
      <Route path="/contact"  element={<Contact />} />
    </Routes>
    <Footer />
  </Router>,
  document.getElementById("root")
);
