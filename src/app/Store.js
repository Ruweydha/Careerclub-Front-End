import { configureStore } from '@reduxjs/toolkit'

//Slice imports
import AuthSlice from './features/Auth/AuthSlice'
import UserSlice from './features/User/UserSlice'


let store = configureStore({
    reducer:{
        otp:AuthSlice.reducer,
        user:UserSlice.reducer
    }
})


export default store