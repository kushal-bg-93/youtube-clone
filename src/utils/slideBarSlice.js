import { createSlice } from "@reduxjs/toolkit";


const slideBarSlice=createSlice({
    name:'slideBarStatus',
    initialState:{
        value:true
    },
    reducers:{
        toggle:(state)=>{
            state.value=!state.value
        }
    }
})

export default slideBarSlice.reducer;
export const {toggle}=slideBarSlice.actions;