import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = { customerId :'', customerName:'', applicationId:'',overRideCounter : 0 };

const customerSlice = createSlice({
    name:'customer',
    initialState:initialAuthState,
    reducers: {
        setCustomerId(state, action){
            state.customerId = action.payload
        },
        setCustomerName(state,action){
            state.customerName = action.payload
        },
        setApplicationId(state,action){
            state.applicationId = action.payload
        },
        setOverrideCounter(state,action){
            state.overRideCounter = action.payload
        } 

    },
})
export const custAction = customerSlice.actions;

export default customerSlice.reducer;