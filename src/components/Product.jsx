import React from "react";
import { formatPrice } from "../tools/helperFunctions";
import { ProductType } from "../tools/propTypes";
import PropTypes from "prop-types";

const Product = ({ children, product }) => {
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

Product.propTypes = {
  children: PropTypes.element,
  product: ProductType,
};

export default Product;
