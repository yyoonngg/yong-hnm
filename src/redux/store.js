import { configureStore } from "@reduxjs/toolkit";
import authenticateReducer from "./reducers/authenticateReducer"
import productReducer from "./reducers/productReducer";

//rootReducer
//thunk
//composeWithDevTools
//applyMiddleware

const store = configureStore({
  reducer: {
    auth: authenticateReducer,
    product: productReducer,
  },
});

export default store;
