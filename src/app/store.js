import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cartSlice";

// Configure and create the Redux store
export const store = configureStore({
    reducer: {
        allCart: cartReducer,   // Define the 'allCart' slice using the cartReducer
    },
});
