import {
  ADD_TO_CART_SUCCESS,
  CART_CHECKOUT_SUCCESS,
  LOAD_CART_ITEMS_SUCCESS,
  REMOVE_FROM_CART_SUCCESS,
} from "../ActionTypes";
import { reduceProductQuantity, addProductFromCart } from "./productsActions";

export const fetchCartItems = () => (dispatch) => {
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const total = cartItems.reduce((a, c) => a + c.price * c.quantity, 0);

  dispatch({
    type: LOAD_CART_ITEMS_SUCCESS,
    payload: { cartItems, total },
  });
};

export const addToCart = (cartItem) => (dispatch, getState) => {
  const cartItems = getState().fromCart.cartItems.slice();
  const total =
    cartItems.reduce((a, c) => a + c.price * c.quantity, 0) +
    cartItem.price * cartItem.quantity;

  if (cartItems.find((item) => item._id === cartItem._id)) {
    cartItem.quantity++;
  } else {
    cartItems.push(cartItem);
  }

  dispatch(reduceProductQuantity(cartItem._id, cartItem.quantity));
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
  const cartItem = getState().fromCart.cartItems.find(
    (item) => item._id === id
  );

  dispatch(addProductFromCart(cartItem));
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
