import React from "react";
import { Routes, Route } from "react-router-dom";
import SellingPage from "../components/SellingPage";
import BuyingPage from "../components/BuyingPage";
import Header from "../components/Header";
import LandingPage from "../components/LandingPage";
import CartContainer from "../components/CartContainer";

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/sell" element={<SellingPage />} />
        <Route path="/buy" element={<BuyingPage />} />
        <Route path="/cart" element={<CartContainer />} />
      </Routes>
    </div>
  );
}

export default App;
