import { configureStore } from "@reduxjs/toolkit";
import toDoReducer from "./reducers/toDoReducer"
export const store = configureStore({
    reducer:{
        toDos:toDoReducer,
    }
})