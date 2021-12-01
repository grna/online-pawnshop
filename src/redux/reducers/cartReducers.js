import {
  ADD_TO_CART_SUCCESS,
  CART_CHECKOUT_SUCCESS,
  LOAD_CART_ITEMS_SUCCESS,
  REMOVE_FROM_CART_SUCCESS,
} from "../ActionTypes";

export const cartReducers = (
  state = {
    cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
    total: 0,
  },
  action
) => {
  switch (action.type) {
    case ADD_TO_CART_SUCCESS:
      return {
        ...state,
        cartItems: action.payload.cartItems,
        total: action.payload.total,
      };
    case LOAD_CART_ITEMS_SUCCESS:
      return {
        ...state,
        cartItems: action.payload.cartItems,
        total: action.payload.total,
      };
    case REMOVE_FROM_CART_SUCCESS:
      return {
        ...state,
        cartItems: action.payload.cartItems,
        total: action.payload.total,
      };
    case CART_CHECKOUT_SUCCESS:
      return { ...state, cartItems: [], total: 0 };
    default:
      return state;
  }
};
