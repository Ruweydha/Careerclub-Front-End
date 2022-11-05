import { configureStore } from '@reduxjs/toolkit'

//Slice imports
import OtpSlice from './features/otp/OtpSlice'


let store = configureStore({
    reducer:{
        otp:OtpSlice.reducer
    }
})


export default store