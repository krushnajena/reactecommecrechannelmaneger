import {
    GET_ORDERS_SUCCESS,
    GET_ORDERS_FAIL,

} from './actionTypes'
const INIT_STATE = {
  orders: [],
    error: {},
}
const ordersr = (state=INIT_STATE,action)=>{
    switch(action.type){
    case GET_ORDERS_SUCCESS:
      return {
        ...state,
        orders: action.payload,
      }

    case GET_ORDERS_FAIL:
      return {
        ...state,
        error: action.payload,
      }
    default:
      return state
    }
}
export default ordersr