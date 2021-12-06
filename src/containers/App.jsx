import React from "react";
import { Routes, Route } from "react-router-dom";
import SellingContainer from "./SellingContainer";
import ProductContainer from "./ProductContainer";
import Header from "../components/Header";
import LandingPage from "../components/LandingPage";
import CartContainer from "./CartContainer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <Header />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/sell" element={<SellingContainer />} />
        <Route path="/buy" element={<ProductContainer />} />
        <Route path="/cart" element={<CartContainer />} />
      </Routes>
    </div>
  );
}

export default App;
