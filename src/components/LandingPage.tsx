import React from "react";
import { NavLink } from "react-router-dom";
import { LandingPageWrapper } from "./styledComponents";

const LandingPage = () => {
  return (
    <LandingPageWrapper>
      <h4>Hi! Are you buying or selling?</h4>
      <ul>
        <li>
          <NavLink to="/sell">SELLING</NavLink>
        </li>
        <li>
          <NavLink to="/buy">BUYING</NavLink>
        </li>
      </ul>
    </LandingPageWrapper>
  );
};

export default LandingPage;
