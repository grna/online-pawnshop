import React from "react";
import { render } from "react-dom";
import App from "./containers/App";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import SellContainer from "./containers/SellContainer";
import BuyContainer from "./containers/BuyContainer";
import Header from "./components/Header";

render(
  <div>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/sell" element={<SellContainer />} />
        <Route path="/buy" element={<BuyContainer />} />
      </Routes>
    </Router>
  </div>,
  document.getElementById("root")
);
