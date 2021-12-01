import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  TypeState,
  TypeCartContainerProps as Props,
} from "../tools/interfaces";
import CartItemsList from "../components/CartItemsList";
import {
  cartCheckOut,
  removeFromCart,
  fetchCartItems,
} from "../redux/actions/cartActions";

const CartContainer = ({
  cartItems,
  total,
  cartCheckOut,
  removeFromCart,
  fetchCartItems,
}: Props) => {
  useEffect(() => {
    fetchCartItems();
  }, [fetchCartItems]);

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
