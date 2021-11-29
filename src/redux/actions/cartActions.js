import {
  ADD_TO_CART_SUCCESS,
  CART_CHECKOUT_SUCCESS,
  REMOVE_FROM_CART_SUCCESS,
} from "../ActionTypes";
import { reduceProductQuantity } from "./productsActions";

export const addToCart = (product) => (dispatch, getState) => {
  const cartItems = getState().fromCart.cartItems.slice();
  const total =
    cartItems.reduce((a, c) => a + c.price * c.quantity, 0) +
    product.price * product.quantity;
  let inCart = false;
  cartItems.forEach((item) => {
    if (item._id === product._id) {
      inCart = true;
      item.quantity++;
    }
  });
  if (!inCart) {
    cartItems.push(product);
  }
  dispatch(reduceProductQuantity(product._id, product.quantity));
  dispatch({
    type: ADD_TO_CART_SUCCESS,
    payload: { cartItems, total },
  });
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
  const cartItems = getState().fromCart.cartItems.filter(
    (item) => item._id !== id
  );
  const total = cartItems.reduce((a, c) => a + c.price * c.quantity, 0);
  dispatch({
    type: REMOVE_FROM_CART_SUCCESS,
    payload: { cartItems, total },
  });
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const cartCheckOut = () => (dispatch) => {
  dispatch({
    type: CART_CHECKOUT_SUCCESS,
  });
  localStorage.removeItem("cartItems");
};
