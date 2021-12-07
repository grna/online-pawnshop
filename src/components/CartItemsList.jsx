import React from "react";
import { formatPrice } from "../tools/helperFunctions";
import Product from "./Product";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { ProductType } from "../tools/propTypes";
import PropTypes from "prop-types";
import shortid from "shortid";

const CartItemsList = ({ cartItems, total, cartCheckOut, removeFromCart }) => {
  const navigate = useNavigate();

  const onCheckOut = (e) => {
    e.preventDefault();
    toast.success(`Your order has been placed. Total: ${formatPrice(total)}.`);
    cartCheckOut();
    navigate("/buy");
  };

  const onRemoveClick = (e, item) => {
    e.preventDefault();
    toast.success("Item removed.");
    removeFromCart(item);
  };

  if (cartItems.length === 0) {
    return <div className="fl-col-cent mg-1rm">You have no cart items.</div>;
  }

  return (
    <div className="fl-col-cent">
      <div className="fl-row-cent mg-1rm w-100 fl-wrp">
        {cartItems.map((item) => (
          <Product key={shortid.generate()} product={item}>
            <button
              className="btn-dang"
              onClick={(e) => onRemoveClick(e, item)}>
              Remove
            </button>
          </Product>
        ))}
      </div>
      <div>{`Total: ${formatPrice(total)}`}</div>
      <button className="btn-prim" onClick={(e) => onCheckOut(e)}>
        Checkout
      </button>
    </div>
  );
};

CartItemsList.propTypes = {
  cartItems: PropTypes.arrayOf(ProductType),
  total: PropTypes.number,
  cartCheckOut: PropTypes.func,
  removeFromCart: PropTypes.func,
};

export default CartItemsList;
