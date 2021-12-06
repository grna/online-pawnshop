import React, { useEffect } from "react";
import { connect } from "react-redux";
import CartItemsList from "../components/CartItemsList";
import {
  cartCheckOut,
  removeFromCart,
  fetchCartItems,
} from "../redux/actions/cartActions";
import { ProductType } from "../tools/propTypes";
import PropTypes from "prop-types";

const CartContainer = ({
  cartItems,
  total,
  cartCheckOut,
  removeFromCart,
  fetchCartItems,
}) => {
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

CartContainer.propTypes = {
  cartItems: PropTypes.arrayOf(ProductType),
  total: PropTypes.number,
  cartCheckOut: PropTypes.func,
  removeFromCart: PropTypes.func,
  fetchCartItems: PropTypes.func,
};

const mapStateToProps = (state) => ({
  cartItems: state.fromCart.cartItems,
  total: state.fromCart.total,
});

export default connect(mapStateToProps, {
  cartCheckOut,
  removeFromCart,
  fetchCartItems,
})(CartContainer);
