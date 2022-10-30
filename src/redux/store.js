import { configureStore, combineReducers } from "@reduxjs/toolkit";
//reducers
import { filterReducer } from "./filter-slice";
import { contactSlice } from "./contact-slice";


const rootReducer = combineReducers({
    contacts: contactSlice.reducer,
    filter: filterReducer
})

export const store = configureStore({
  reducer: rootReducer,
});



