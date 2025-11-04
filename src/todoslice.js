import { createSlice } from "@reduxjs/toolkit";

const todoslice =createSlice({
    name:"todo",
    initialState:{  task:[]},
  
    reducers:{
        addto:(state,action)=>{
            state.task.push({id:Date.now(),name:action.payload.name,address:action.payload.address})
        },
        removetask:(state,action)=>{
            state.task=state.task.filter((i)=>i.id!==action.payload)
        },
        edittaskk:(state,action)=>{
            const {id,name}=action.payload;
            const todo=state.task.find((t)=>t.id==id)
            if(todo) todo.name=name
        }

    }
})


export const{addto,removetask,edittaskk}=todoslice.actions
export default todoslice.reducer;