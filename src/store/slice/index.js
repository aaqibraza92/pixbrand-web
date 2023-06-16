import { configureStore } from "@reduxjs/toolkit";
import GlobalReducer from "./GlobalReducer";
const Store=configureStore({
    reducer: GlobalReducer
});

export default Store;