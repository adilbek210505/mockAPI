import {appDispatch} from "../../index";
import axios from "axios";
import {getOrder} from "../OrdersSlice";


export const fetchOrderREC = (el: any) => async (dispatch: appDispatch) => {
    dispatch(getOrder(
        await axios.post(`https://63f7d56473bce6c44976af55.mockapi.io/orders`,el)
    ))

}