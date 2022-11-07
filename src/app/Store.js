import { configureStore } from '@reduxjs/toolkit'

//Slice imports
import AuthSlice from './features/Auth/AuthSlice'
import UserSlice from './features/User/UserSlice'
import JobSlice from './features/Job/JobSlice'

let store = configureStore({
    reducer:{
        otp:AuthSlice.reducer,
        user:UserSlice.reducer,
        job:JobSlice.reducer
    }
})


export default store