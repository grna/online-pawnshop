import { ADD_PRODUCT_SUCCESS, LOAD_PRODUCTS_SUCCESS } from "../ActionTypes";
import shortid from "shortid";
import { calcNewPrice } from "../../tools/helperFunctions";

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

export const addProduct = (formValues) => (dispatch, getState) => {
  const product = {
    _id: shortid.generate(),
    title: formValues.title,
    quantity: formValues.quantity,
    price: calcNewPrice(1.2, 1.5, formValues.counterOffer),
  };
  const products = getState().fromProducts.products.slice();
  products.push(product);

  localStorage.setItem("products", JSON.stringify(products));
  dispatch({
    type: ADD_PRODUCT_SUCCESS,
    payload: products,
  });
};
