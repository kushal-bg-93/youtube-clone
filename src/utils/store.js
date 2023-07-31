import { configureStore } from "@reduxjs/toolkit";
import slideBarSliceReducer from "./slideBarSlice";


const appStore=configureStore(
    {
        reducer:{
            slideBarStatus: slideBarSliceReducer
        }
    }
)

export default appStore;