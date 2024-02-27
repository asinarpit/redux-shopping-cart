import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./slices/CartSlice";


export const store = configureStore({
    reducer:{
        // this CartSlice.reducer's reducer is different from the reducer object we have created in the CartSlice.

        // This reducer is auto generated and contains state as well as reducer functions
        cart: CartSlice.reducer,
    },
})