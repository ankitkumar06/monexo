import {  configureStore } from "@reduxjs/toolkit";

import authSlice from './authSlice'
import customerSlice from './customerSlice'

const store = configureStore({
    reducer: {authRedux: authSlice, custRedux :customerSlice}
});




export default store;