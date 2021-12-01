import React from "react";
import { TypeProduct } from "../tools/interfaces";
import Product from "./Product";
import BuyingForm from "./BuyingForm";

const ProductList = (props: {
  products: TypeProduct[];
  addToCart: (cartItem: TypeProduct) => void;
}) => {
  const { products, addToCart } = props;
  return (
    <div className="fl-row-cent fl-wrp w-100">
      {products.map((product) => (
        <Product key={product._id} product={product}>
          <BuyingForm product={product} addToCart={addToCart} />
        </Product>
      ))}
    </div>
  );
};

export default ProductList;
