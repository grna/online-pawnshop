import { ADD_PRODUCT_SUCCESS, LOAD_PRODUCTS_SUCCESS } from "../ActionTypes";
import shortid from "shortid";
import { calcNewPrice } from "../../tools/helperFunctions";

export const fetchProducts = () => (dispatch) => {
  const products =
    JSON.parse(localStorage.getItem("products")) || require("../../data.json");

  dispatch({
    type: LOAD_PRODUCTS_SUCCESS,
    payload: { products },
  });
};

export const reduceProductQuantity =
  (cartItemId, cartItemQuantity) => (dispatch, getState) => {
    const products = getState().fromProducts.products.slice();
    const product = products.find((p) => p._id === cartItemId);
    product.quantity -= cartItemQuantity;

    dispatch({
      type: LOAD_PRODUCTS_SUCCESS,
      payload: { products },
    });

    localStorage.setItem("products", JSON.stringify(products));
  };

export const addProduct = (formValues) => (dispatch, getState) => {
  const min = 1.2;
  const max = 1.5;

  const product = {
    _id: shortid.generate(),
    title: formValues.title,
    quantity: parseInt(formValues.quantity),
    price: calcNewPrice(min, max, formValues.counterOffer),
  };

  dispatch(fetchProducts());

  const products = [product, ...getState().fromProducts.products.slice()];

  dispatch({
    type: ADD_PRODUCT_SUCCESS,
    payload: { products },
  });
  localStorage.setItem("products", JSON.stringify(products));
};

export const addProductFromCart = (cartItem) => (dispatch, getState) => {
  const products = getState().fromProducts.products.slice();
  const product = products.find((p) => p._id === cartItem._id);

  product.quantity += cartItem.quantity;

  dispatch({
    type: ADD_PRODUCT_SUCCESS,
    payload: { products },
  });
  localStorage.setItem("products", JSON.stringify(products));
};
