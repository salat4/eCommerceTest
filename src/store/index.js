import { configureStore } from "@reduxjs/toolkit";
import userReducer from './slice/userSlice'
import basketReducer from './slice/basketSlice'
export const store = configureStore({
    reducer:{
        user: userReducer,
        basket: basketReducer,
    }
})