import { createSlice } from "@reduxjs/toolkit";

const autoSuggestionSlice=createSlice(
    {
        name:'autoSuggestionSlice',
        initialState:{
            'result':{
                "dummyKey":[
                {
                    id:{
                        "videoId":"dummyId"
                    },
                    snippet:{
                        "title":"dummyTitle",
                        
                    }
                }
            ]}
        },
        reducers:{
            setAutoSuggestions:(state,action)=>{
                state.result={...state.result,...action.payload}
            }
        }
    }
)

export const {setAutoSuggestions}=autoSuggestionSlice.actions;
export default autoSuggestionSlice.reducer;