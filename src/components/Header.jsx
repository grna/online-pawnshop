import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <NavLink to="/">
        <h4>Online Pawnshop</h4>
      </NavLink>
      <ul className="w-20">
        <li>
          <NavLink to="/">HOME</NavLink>
        </li>
        <li>
          <NavLink to="/sell">SELL</NavLink>
        </li>
        <li>
          <NavLink to="/buy">BUY</NavLink>
        </li>
        <li>
          <NavLink to="/cart">CART</NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
