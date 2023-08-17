import { createSlice } from "@reduxjs/toolkit";
import productData from "../data/productData";

const initialState = {
    cart: [],
    items: productData,
    totalQuantity: 0,
    totalPrice: 0
}


export const cartSlice = createSlice(
    {
        name: "Cart",
        initialState,
        reducers: {
            addToCart: (state, action) => {
                state.cart.push(action.payload);
            }
        },
    }
)

export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer;