import React from "react";
import { TypeProduct } from "../tools/interfaces";
import Product from "./Product";
import { ProductListWrapper } from "./styledComponents";
import BuyingForm from "./BuyingForm";

const ProductList = (props: {
  products: TypeProduct[];
  addToCart: (cartItem: TypeProduct) => void;
}) => {
  const { products, addToCart } = props;
  return (
    <ProductListWrapper>
      {products.map((product) => (
        <Product key={product._id} product={product}>
          <BuyingForm product={product} addToCart={addToCart} />
        </Product>
      ))}
    </ProductListWrapper>
  );
};

export default ProductList;
