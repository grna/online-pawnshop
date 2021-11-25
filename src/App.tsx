import React from "react";
import { NavLink } from "react-router-dom";

function App() {
  return (
    <div>
      <h4>Hi! Are you buying or selling?</h4>
      <NavLink to="/sell">SELLING</NavLink>
      <NavLink to="/buy">BUYING</NavLink>
    </div>
  );
}

export default App;
