import { createSlice } from '@reduxjs/toolkit'

let initialState = {
    id:"",
    title:"",
    description:"",
    qualification:"",
    company:"",
    industry:"",
    jobType:""
}

let JobSlice = createSlice({
    name:"job",
    initialState,
    reducers:{
        addJob : (state,action)=>{
            state.id=action.payload.id
            state.title=action.payload.title
            state.description=action.payload.description
            state.qualification=action.payload.qualification
            state.industry=action.payload.industry.name
            state.company=action.payload.company.name
            state.jobType=action.payload.jobType.name
        },
        resetJob:(state)=>{
            state.id=null
            state.title=null
            state.description=null
            state.qualification=null
            state.industry=null
            state.company=null
            state.jobType=null
        }
    }
})

export default JobSlice