import { configureStore } from "@reduxjs/toolkit";
import post from './slices/postSlice'
export const store = configureStore({
    reducer:{
        post
    }

})