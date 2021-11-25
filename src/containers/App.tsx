import React from "react";
import { NavLink } from "react-router-dom";

function App() {
  return (
    <div>
      <h4>Hi! Are you buying or selling?</h4>
      <ul>
        <li>
          <NavLink to="/sell">SELLING</NavLink>
        </li>
        <li>
          <NavLink to="/buy">BUYING</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default App;
