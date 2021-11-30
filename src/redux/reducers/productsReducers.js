import {
  LOAD_PRODUCTS_SUCCESS,
  LOAD_PRODUCTS_FAILED,
  ADD_PRODUCT_SUCCESS,
} from "../ActionTypes";

const initialState = {
  products: [],
};

export const productsReducers = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS_SUCCESS:
      return { ...state, products: action.payload };
    case LOAD_PRODUCTS_FAILED:
      return state;
    case ADD_PRODUCT_SUCCESS:
      return { ...state, products: action.payload };
    default:
      return state;
  }
};
