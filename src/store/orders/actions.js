import {
    GET_ORDERS,
    GET_ORDERS_SUCCESS,
    GET_ORDERS_FAIL,
} from './actionTypes'
export const getOrders=()=>({
    type:GET_ORDERS
})


export const getOrdersSuccess = orders => ({
  type: GET_ORDERS_SUCCESS,
  payload: orders,
})

export const getOrdersFail = error => ({
    type: GET_ORDERS_FAIL,
    payload: error,
})