import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./productSlice";
import BrandReducer from "./brandSlice";
const store = configureStore({
    reducer:{
        product:ProductReducer,
        brand:BrandReducer
    }
})

export default store;