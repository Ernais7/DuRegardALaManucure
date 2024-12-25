import React from "react";
import {link} from "react-router-dom";
import logo from "../assets/Image/Logo/logo.png";

return (
  <header id="home">
    <div className="link__logo">
      <img src={logo} alt="Logo du site" />
    </div>
    <div className="link__head">
      <ul>
        <li>
          <Navlink to="/">A propos</Navlink>
        </li>
        <li>
          <Navlink to="/">Prestations</Navlink>
        </li>
        <li>
          <Navlink to="/">Contact</Navlink>
        </li>
        <li>
          <Navlink to="/">Nos Tarifs</Navlink>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;
