import { LOAD_PRODUCTS_SUCCESS } from "../ActionTypes";

export const fetchProducts = () => (dispatch) => {
  const dispatchData = {
    type: LOAD_PRODUCTS_SUCCESS,
    payload: [],
  };

  if (localStorage.getItem("products")) {
    dispatchData.payload = JSON.parse(localStorage.getItem("products"));
  } else {
    dispatchData.payload = require("../../data.json");
  }

  dispatch(dispatchData);
};

export const reduceProductQuantity =
  (cartId, cartQuantity) => (dispatch, getState) => {
    const products = getState().fromProducts.products.slice();
    const product = products.find((p) => p._id === cartId);
    product.quantity -= cartQuantity;

    const dispatchData = {
      type: LOAD_PRODUCTS_SUCCESS,
      payload: products,
    };

    if (product.quantity === 0) {
      dispatchData.payload = products.filter((p) => p._id !== cartId);
    }
    localStorage.setItem("products", JSON.stringify(dispatchData.payload));
    dispatch(dispatchData);
  };
