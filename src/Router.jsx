import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./ScrollToTop.jsx"; // Assure-toi que le chemin est correct selon où tu as créé le fichier
import Layout from "./components/Layout.jsx";
import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import NotFound from "./pages/notFound.jsx";
import Contact from "./pages/contact.jsx";
import Prices from "./pages/prices.jsx";
import Services from "./pages/services.jsx";
import Conditions from "./pages/conditions.jsx";
import MentionsLegales from "./pages/mentionsLegales.jsx";

function AppRouter() {
  return (
    <Router
      basename={
        process.env.NODE_ENV === "production" ? process.env.PUBLIC_URL : ""
      }
    >
      {/* Le composant est appelé ici, à l'intérieur du Router mais hors des Routes */}
      <ScrollToTop />
      
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/services" element={<Services />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/conditions" element={<Conditions />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRouter;