import { ADD_TO_CART_SUCCESS, REMOVE_FROM_CART_SUCCESS } from "../ActionTypes";

export const addToCart = (product) => (dispatch, getState) => {
  const cartItems = getState().fromCart.cartItems.slice();
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
