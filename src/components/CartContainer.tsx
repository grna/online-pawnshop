import React, { useEffect } from "react";
import { connect } from "react-redux";
import { TypeProduct, TypeState } from "../tools/interfaces";
import CartItemsList from "./CartItemsList";
import {
  cartCheckOut,
  removeFromCart,
  fetchCartItems,
} from "../redux/actions/cartActions";

const CartContainer = (props: {
  cartItems: TypeProduct[];
  total: number;
  cartCheckOut: () => void;
  removeFromCart: (id: string) => void;
  fetchCartItems: () => void;
}) => {
  const { cartItems, total, cartCheckOut, removeFromCart, fetchCartItems } =
    props;

  useEffect(() => {
    fetchCartItems();
  }, [fetchCartItems]);

  if (cartItems.length === 0) {
    return <div>You have no cart items.</div>;
  }

  return (
    <CartItemsList
      cartItems={cartItems}
      total={total}
      cartCheckOut={cartCheckOut}
      removeFromCart={removeFromCart}
    />
  );
};

const mapStateToProps = (state: TypeState) => ({
  cartItems: state.fromCart.cartItems,
  total: state.fromCart.total,
});

export default connect(mapStateToProps, {
  cartCheckOut,
  removeFromCart,
  fetchCartItems,
})(CartContainer);
