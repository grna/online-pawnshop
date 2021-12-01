import React from "react";
import { formatPrice } from "../tools/helperFunctions";
import { TypeProduct } from "../tools/interfaces";
import Product from "./Product";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const CartItemsList = (props: {
  cartItems: TypeProduct[];
  total: number;
  cartCheckOut: () => void;
  removeFromCart: (id: string) => void;
}) => {
  const navigate = useNavigate();
  const { cartItems, total, cartCheckOut, removeFromCart } = props;

  const onCheckOut = (e: React.MouseEvent) => {
    e.preventDefault();
    toast.success("Your order has been placed.");
    cartCheckOut();
    navigate("/buy");
  };

  const onRemoveClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    toast.success("Item removed.");
    removeFromCart(id);
  };

  return (
    <div className="fl-col-cent">
      <div className="fl-row-cent mg-1rm w-100">
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
