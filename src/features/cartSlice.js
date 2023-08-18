import { createSlice } from "@reduxjs/toolkit";
import productData from "../data/productData";

// Initial state for the cart slice
const initialState = {
    cart: [],           // Array to hold cart items
    items: productData, // Array to hold all product items
    totalQuantity: 0,   // Total quantity of items in the cart
    totalPrice: 0,      // Total price of items in the cart
};

// Create a Redux slice for managing the cart state
export const cartSlice = createSlice({
    name: "Cart",       // Slice name
    initialState,       // Initial state defined above
    reducers: {
        addToCart: (state, action) => {
            // Check if the item already exists in the cart
            let find = state.cart.findIndex((item) => item.id === action.payload.id);
            if (find >= 0) {
                // If exists, increment the quantity of the existing item
                state.cart[find].quantity += 1;
            } else {
                // If not exists, push the new item to the cart
                state.cart.push(action.payload);
            }
        },
        getCartTotal: (state) => {
            // Calculate the total quantity and total price of items in the cart
            const { totalQuantity, totalPrice } = state.cart.reduce(
                (cartTotal, cartItem) => {
                    const { price, quantity } = cartItem;
                    const itemTotal = price * quantity;
                    cartTotal.totalPrice += itemTotal;
                    cartTotal.totalQuantity += quantity;
                    return cartTotal;
                },
                {
                    totalPrice: 0,
                    totalQuantity: 0,
                }
            );
            // Update the state with the calculated totals
            state.totalPrice = parseInt(totalPrice.toFixed(2));
            state.totalQuantity = totalQuantity;
        },
        removeItem: (state, action) => {
            // Remove an item from the cart based on its id
            state.cart = state.cart.filter((item) => item.id !== action.payload);
        },
        incrementItem: (state, action) => {
            // Increment the quantity of an item in the cart
            state.cart = state.cart.map((item) => {
                if (item.id === action.payload) {
                    return { ...item, quantity: item.quantity + 1 };
                } else {
                    return item;
                }
            });
        },
        decrementItem: (state, action) => {
            // Decrement the quantity of an item in the cart
            state.cart = state.cart.map((item) => {
                if (item.id === action.payload) {
                    return { ...item, quantity: item.quantity - 1 };
                } else {
                    return item;
                }
            });
        },
    },
});

// Export the action creators and reducer from the slice
export const {
    addToCart,
    getCartTotal,
    removeItem,
    incrementItem,
    decrementItem,
} = cartSlice.actions;

// Export the reducer function for use in Redux store
export default cartSlice.reducer;
