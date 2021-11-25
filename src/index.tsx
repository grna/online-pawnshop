import React from "react";
import { render } from "react-dom";
import App from "./App";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import SellContainer from "./SellContainer";
import BuyContainer from "./BuyContainer";

render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/sell" element={<SellContainer />} />
      <Route path="/buy" element={<BuyContainer />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);
