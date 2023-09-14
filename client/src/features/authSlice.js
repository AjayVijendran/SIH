import {createSlice} from '@reduxjs/toolkit'

const initialState = {
   userInfo : null
}

const authSlice = createSlice({
    name : "auth",
    initialState : initialState,
    reducers : {
        setCredentials : (state,action)=>{
            state.userInfo = action.payload
        },
        clearCredentials : (state,action)=>{
            state.userInfo = null
        }
    }
})
export const {setCredentials,clearCredentials} = authSlice.actions
export default authSlice.reducer