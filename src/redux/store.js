import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { productsReducers } from "./reducers/productsReducers";
import { cartReducers } from "./reducers/cartReducers";

const initialState = {
  fromProducts: {
    products: [],
  },
};

const composeEnhanser = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    fromProducts: productsReducers,
    fromCart: cartReducers,
  }),
  initialState,
  composeEnhanser(applyMiddleware(thunk))
);

export default store;
