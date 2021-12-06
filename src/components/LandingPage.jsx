import React from "react";
import { NavLink } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="fl-col-cent">
      <h4>Hi! Are you buying or selling?</h4>
      <ul className="fl-row-cent">
        <li>
          <NavLink className="mg-1rm" to="/sell">
            SELLING
          </NavLink>
        </li>
        <li>
          <NavLink className="mg-1rm" to="/buy">
            BUYING
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default LandingPage;
