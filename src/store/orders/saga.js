import { call, put, takeEvery } from "redux-saga/effects"

// Crypto Redux States
import { GET_ORDERS } from "./actionTypes"
import {
    getOrdersSuccess,
    getOrdersFail
} from "./actions"
import {
    getMyOrders
} from "../../helpers/backend_helper"
function* fetchOrders() {
    try {
      const response = yield call(getMyOrders)
     
      yield put(getOrdersSuccess(response["order"]))
    } catch (error) {
      yield put(getOrdersFail(error))
    }
}
function* ordersSaga() {
    yield takeEvery(GET_ORDERS, fetchOrders)
}
  
export default ordersSaga