import React from "react";
import { TypeProduct } from "../tools/interfaces";
import { ProductWrapper } from "./styledComponents";
import { formatPrice } from "../tools/helperFunctions";

const Product = (props: {
  children: React.ReactNode | null;
  product: TypeProduct;
}) => {
  const { children, product } = props;

  return (
    <ProductWrapper>
      <h5>{product.title}</h5>
      <p>
        <strong>{`Quantity: `}</strong>
        {product.quantity}
        <strong>{` Price: `}</strong>
        {formatPrice(product.price)}
      </p>
      {children}
    </ProductWrapper>
  );
};

export default Product;
