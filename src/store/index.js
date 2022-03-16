import {  configureStore } from "@reduxjs/toolkit";

import authSlice from './authSlice'

const store = configureStore({
    reducer: {authRedux: authSlice}
});




export default store;