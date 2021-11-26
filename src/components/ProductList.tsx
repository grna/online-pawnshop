import React from "react";
import { TypeProduct } from "../tools/interfaces";
import Product from "./Product";
import { ProductListWrapper } from "./styledComponents";

const ProductList = (props: { products: TypeProduct[] }) => {
  const { products } = props;
  return (
    <ProductListWrapper>
      {products.map((product) => (
        <Product product={product} />
      ))}
    </ProductListWrapper>
  );
};

export default ProductList;
