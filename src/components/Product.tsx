import React from "react";
import { TypeProduct } from "../tools/interfaces";
import { formatPrice } from "../tools/helperFunctions";

const Product = (props: {
  children: React.ReactNode | null;
  product: TypeProduct;
}) => {
  const { children, product } = props;

  return (
    <div className="fl-col-cent product">
      <h5 className="mg-1rm txt-cent">{product.title}</h5>
      <div>
        <label className="mg-1rm">
          <strong>{`Quantity: `}</strong>
          {product.quantity}
        </label>

        <label className="mg-1rm">
          <strong>{` Price: `}</strong>
          {formatPrice(product.price)}
        </label>
      </div>
      {children}
    </div>
  );
};

export default Product;
