import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = { userName :'', token:'', userRole:'' };

const authSlice = createSlice({
    name:'auth',
    initialState:initialAuthState,
    reducers: {
        setUserNameApp(state, action){
            state.userName = action.payload

        },
        setUserRoken(state,action){
            state.token = action.payload
        },
        setUserRole(state,action){
            state.userRole = action.payload
        }
        

    },
})
export const authAction = authSlice.actions;

export default authSlice.reducer;