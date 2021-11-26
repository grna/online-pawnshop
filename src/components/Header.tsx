import React from "react";
import { NavLink } from "react-router-dom";
import { HeaderWrapper } from "./styledComponents";

const Header = () => {
  return (
    <HeaderWrapper>
      <NavLink to="/">
        <h4>Online Pawnshop</h4>
      </NavLink>
      <ul>
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
    </HeaderWrapper>
  );
};

export default Header;
