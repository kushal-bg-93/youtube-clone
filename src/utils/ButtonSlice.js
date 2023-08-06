import { createSlice } from "@reduxjs/toolkit";


const ButtonSlice=createSlice({
    name:"ButtonSlice",
    initialState:{
        id:"all"
    },
    reducers:{
        select:(state,action)=>{
            state.id=action.payload
        }
    }
})

export const {select} =ButtonSlice.actions;

export default ButtonSlice.reducer;