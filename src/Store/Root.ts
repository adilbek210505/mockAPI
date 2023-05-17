import {combineReducers} from "@reduxjs/toolkit";
import AdminReducer from "./Reducer/MenuSlice";
import ChildS from "./Reducer/ChildSlice"
import OrderReducer from "./Reducer/OrdersSlice";

export const rootState = combineReducers({
    AdminReducer,
    ChildS,
    OrderReducer
})

