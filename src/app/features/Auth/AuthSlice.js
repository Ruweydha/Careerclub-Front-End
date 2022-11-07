import { createSlice } from '@reduxjs/toolkit'


let initialState = {
    access:'',
    refresh:''
}

let AuthSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        addToken : (state,action)=>{
            state.access=action.payload.accessToken
            state.refresh=action.payload.refreshToken
        },
        resetToken:(state)=>{
            state.access=null
            state.refresh=null
        }
    }
})


export default AuthSlice