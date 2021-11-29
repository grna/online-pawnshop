import React from "react";
import { connect } from "react-redux";
import { TypeProduct, TypeState } from "../tools/interfaces";
import CartItemsList from "./CartItemsList";
import { cartCheckOut, removeFromCart } from "../redux/actions/cartActions";

const CartContainer = (props: {
  cartItems: TypeProduct[];
  total: number;
  cartCheckOut: () => void;
  removeFromCart: (id: string) => void;
}) => {
  const { cartItems, total, cartCheckOut, removeFromCart } = props;

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

export default connect(mapStateToProps, { cartCheckOut, removeFromCart })(
  CartContainer
);
