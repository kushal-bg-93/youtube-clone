import { configureStore } from "@reduxjs/toolkit";
import slideBarSliceReducer from "./slideBarSlice";
import videoCardSliceReducer from "./videoCardSlice";
import buttonSelectSlice from './ButtonSlice'
import autoSuggestionSlice from "./autoSuggestionSlice";


const appStore=configureStore(
    {
        reducer:{
            slideBarStatus: slideBarSliceReducer,
            videoCardSlice:videoCardSliceReducer,
            buttonSlice:buttonSelectSlice,
            autoSuggestion:autoSuggestionSlice
        }
    }
)

export default appStore;