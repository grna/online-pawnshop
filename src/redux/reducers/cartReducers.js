import {
  ADD_TO_CART_SUCCESS,
  CART_CHECKOUT_SUCCESS,
  REMOVE_FROM_CART_SUCCESS,
} from "../ActionTypes";

export const cartReducers = (
  state = {
    cartItems: JSON.parse(localStorage.getItem("cartItems") || "[]"),
  },
  action
) => {
  switch (action.type) {
    case ADD_TO_CART_SUCCESS:
      return { ...state, cartItems: action.payload.cartItems };
    case REMOVE_FROM_CART_SUCCESS:
      return { ...state, cartItems: action.payload.cartItems };
    case CART_CHECKOUT_SUCCESS:
      return { ...state, cartItems: action.payload.cartItems };
    default:
      return state;
  }
};
