import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IOrderState} from "../../Types/Order";


const initialState: IOrderState = {
    order: []
}


export const OrderReducer = createSlice({
    name: "ORDER",
    initialState,
    reducers: {
        getOrder(state, {payload}: PayloadAction<any>) {
            const fount = state.order.find(e => e.id === payload.id)
            if (fount) {
                state.order = state.order.map(e => e.id === fount.id ? {quantity: +1} : e)
            } else {
                state.order = [...state.order, {...payload, quantity: 1}]
            }
        }
    }
})

export const {getOrder} = OrderReducer.actions
export default OrderReducer.reducer