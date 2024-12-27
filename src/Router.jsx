import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import NotFound from "./pages/notFound.jsx";
import Contact from "./pages/contact.jsx"
import Prices from "./pages/prices.jsx";
import Services from "./pages/services.jsx";

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
