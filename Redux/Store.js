//import { createStore } from "redux";
import { configureStore } from '@reduxjs/toolkit';
//import reducer from "./reducers/index";

import cartReducer from './Reducers/cartSlice';

/* export default function configureStore(initialState) {
  const store = createStore(reducer, initialState);
  return store;
} */
export default configureStore({
  reducer : {
    cartReducer : cartReducer,

  }
})
