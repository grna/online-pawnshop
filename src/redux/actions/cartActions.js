import { ADD_TO_CART_SUCCESS, REMOVE_FROM_CART_SUCCESS } from "../ActionTypes";

export const addToCart = (product) => (dispatch, getState) => {
  const cartItems = getState().cart.cartItems.slice();
  let inCart = false;
  cartItems.forEach((x) => {
    if (x.id === product.id) {
      inCart = true;
      x.count++;
    }
  });
  if (!inCart) {
    cartItems.push({ ...product, count: 1 });
  }
  dispatch({
    type: ADD_TO_CART_SUCCESS,
    payload: { cartItems },
  });
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const removeFromCart = (product) => (dispatch, getState) => {
  const cartItems = getState().cart.cartItems.filter(
    (x) => x.id !== product.id
  );
  dispatch({
    type: REMOVE_FROM_CART_SUCCESS,
    payload: { cartItems },
  });
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};
