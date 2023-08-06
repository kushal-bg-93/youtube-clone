import { createSlice } from "@reduxjs/toolkit";


const videoCardSlice=createSlice({
    name:"videoCardSlice",
    initialState:{
        cardConfigs:{
            id:'small'
            },
    },
        reducers:{
            toggleConfig:(state,action)=>{
                state.cardConfigs.id=action.payload;
            }
        }
    
})

export const {toggleConfig}=videoCardSlice.actions;

export default videoCardSlice.reducer;