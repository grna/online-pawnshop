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

const checkIfItemInCart = (items, item) => {
  const cartItem = items.find(
    (i) => i._id === item._id && i.price === item.price
  );
  const inCart = cartItem === undefined ? false : true;
  return { inCart, cartItem };
};

export const addToCart = (newItem) => (dispatch, getState) => {
  const cartItems = getState().fromCart.cartItems.slice();
  const total =
    cartItems.reduce((a, c) => a + c.price * c.quantity, 0) +
    newItem.price * newItem.quantity;

  const { itemInCart, cartItem } = checkIfItemInCart(cartItems, newItem);

  if (itemInCart) {
    cartItem.quantity += newItem.quantity;
  } else {
    cartItems.push(newItem);
  }

  dispatch(reduceProductQuantity(newItem._id, newItem.quantity));
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
