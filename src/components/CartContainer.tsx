import React from "react";
import { connect } from "react-redux";
import { TypeProduct, TypeState } from "../tools/interfaces";
import CartItemsList from "./CartItemsList";
import { cartCheckOut } from "../redux/actions/cartActions";

const CartContainer = (props: {
  cartItems: TypeProduct[];
  cartCheckOut: () => void;
}) => {
  const { cartItems, cartCheckOut } = props;

  if (cartItems.length === 0) {
    return <div>You have no cart items.</div>;
  }

  return (
    <CartItemsList
      cartItems={cartItems}
      cartCheckOut={cartCheckOut}></CartItemsList>
  );
};

const mapStateToProps = (state: TypeState) => ({
  cartItems: state.fromCart.cartItems,
});

export default connect(mapStateToProps, { cartCheckOut })(CartContainer);
