import React from "react";
import { formatPrice } from "../tools/helperFunctions";
import { TypeCartItemsListProps as Props } from "../tools/interfaces";
import Product from "./Product";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const CartItemsList = ({
  cartItems,
  total,
  cartCheckOut,
  removeFromCart,
}: Props) => {
  const navigate = useNavigate();

  const onCheckOut = (e: React.MouseEvent) => {
    e.preventDefault();
    toast.success(`Your order has been placed. Total: ${formatPrice(total)}.`);
    cartCheckOut();
    navigate("/buy");
  };

  const onRemoveClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    toast.success("Item removed.");
    removeFromCart(id);
  };

  if (cartItems.length === 0) {
    return <div className="fl-col-cent mg-1rm">You have no cart items.</div>;
  }

  return (
    <div className="fl-col-cent">
      <div className="fl-row-cent mg-1rm w-100 fl-wrp">
        {cartItems.map((item) => (
          <Product key={item._id} product={item}>
            <button
              className="btn-dang"
              onClick={(e) => onRemoveClick(e, item._id)}>
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

export default CartItemsList;
