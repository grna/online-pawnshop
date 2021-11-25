import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <NavLink to="/">Online Pawnshop</NavLink>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/sell">SELL</NavLink>
          </li>
          <li>
            <NavLink to="/buy">BUY</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
