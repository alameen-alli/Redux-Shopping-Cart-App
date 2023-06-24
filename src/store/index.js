import authSlice from "./auth-slice";
import cartSlice from "./cart-slice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        cart: cartSlice.reducer
    },
})

export default store;