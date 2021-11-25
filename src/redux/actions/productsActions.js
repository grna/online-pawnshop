import { LOAD_PRODUCTS_SUCCESS } from "../ActionTypes";

export const fetchProducts = () => (dispatch) => {
  const data = require("../../data.json");

  dispatch({
    type: LOAD_PRODUCTS_SUCCESS,
    payload: data,
  });
};
