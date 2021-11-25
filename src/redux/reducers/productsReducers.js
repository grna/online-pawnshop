import { LOAD_PRODUCTS_SUCCESS, LOAD_PRODUCTS_FAILED } from "../ActionTypes";

const initialState = {
  products: [],
};

export const productsReducers = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS_SUCCESS:
      return { ...state, products: action.payload };
    case LOAD_PRODUCTS_FAILED:
      return state;
    default:
      return state;
  }
};
