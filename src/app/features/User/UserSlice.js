import { createSlice } from '@reduxjs/toolkit'



let initialState = {
    id:'',
    username:'',
    email:'',
    phone_number:'',
    bio:'',
    profession:''
}

let UserSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        addUser : (state,action)=>{
            state.id=action.payload.id
            state.username=action.payload.username
            state.email=action.payload.email
            state.phone_number=action.payload.phoneNumber
            state.bio=action.payload.bio
            state.profession=action.payload.profession
        },
        updateUser:(state,action)=>{
            state.profession=action.payload.profession
            state.bio=action.payload.bio
            state.phone_number=action.payload.phoneNumber
        }
        ,
        resetUser:(state)=>{
            state.id=null
            state.username=null
            state.email=null
            state.phone_number=null
            state.bio=null
            state.profession=null
        }
    }
})

export default UserSlice