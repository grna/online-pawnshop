import { LOAD_PRODUCTS_SUCCESS, ADD_PRODUCT_SUCCESS } from "../ActionTypes";

const initialState = {
  products: [],
};

export const productsReducers = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS_SUCCESS:
      return { ...state, products: action.payload.products };
    case ADD_PRODUCT_SUCCESS:
      return { ...state, products: action.payload.products };
    default:
      return state;
  }
};
