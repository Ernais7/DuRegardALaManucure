import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../src/pages/home.jsx";
import About from "../src/pages/about.jsx";
import NotFound from "../src/pages/notFound.jsx";
import Contact from "../src/pages/contact.jsx"
import Prices from "../src/pages/prices.jsx";
import Services from "../src/pages/services.jsx";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/prices" element={<Prices />} />
        <Route path="/sevices" element={<Services />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
