import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./features/navslice";

export const store=configureStore({
    reducer:{
        navigation:navReducer,
    },
});
