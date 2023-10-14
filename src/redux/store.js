import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./auth/userSlice";
import productReducer from "./product/productSlice";

export const store = configureStore({
  reducer: {
    userInfo: userReducer,
    product: productReducer,
  },
});
