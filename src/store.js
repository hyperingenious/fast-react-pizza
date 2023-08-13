import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import menuReducer from "./features/menu/menuSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    pizzaMenu: menuReducer,
  },
});

export default store;
