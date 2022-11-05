import { createSlice } from '@reduxjs/toolkit'


let initialState = {
    access:''
}

let OtpSlice = createSlice({
    name:"Otp",
    initialState,
    reducers:{
        addToken : (state,action)=>{
            state.access=action.payload.accessToken
        },
        resetToken:(state)=>{
            state.access=null
        }
    }
})


export default OtpSlice