import { combineReducers } from "@reduxjs/toolkit";
import TransecReducer from "./TransecReducer";

const combinedReducers = combineReducers({
    transec: TransecReducer
});

export default combinedReducers;