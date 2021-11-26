import React from "react";
import { TypeProduct } from "../tools/interfaces";
import { ButtonLarge, ProductWrapper } from "./styledComponents";

const Product = (props: { product: TypeProduct }) => {
  const { product } = props;
  return (
    <ProductWrapper>
      <h5>{product.title}</h5>
      <p>Quantity: {product.quantity}</p>
      <p>Price: {product.price}</p>
      <ButtonLarge>To Cart</ButtonLarge>
    </ProductWrapper>
  );
};

export default Product;
