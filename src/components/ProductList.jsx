import React from "react";
import Product from "./Product";
import BuyingForm from "./BuyingForm";
import { ProductType } from "../tools/propTypes";
import PropTypes from "prop-types";
import shortid from "shortid";

const ProductList = ({ products, addToCart }) => {
  return (
    <div className="fl-row-cent fl-wrp w-100">
      {products.map((product) => (
        <Product key={shortid.generate()} product={product}>
          <BuyingForm product={product} addToCart={addToCart} />
        </Product>
      ))}
    </div>
  );
};

ProductList.propTypes = {
  products: PropTypes.arrayOf(ProductType),
  addToCart: PropTypes.func,
};

export default ProductList;
