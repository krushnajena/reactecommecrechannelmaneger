import { call, put, takeEvery } from "redux-saga/effects"

// Crypto Redux States
import { GET_PRODUCTS } from "./actionTypes"
import {
    getProductsSuccess,
    getProductsFail
} from "./actions"
import {
    getMyProducts
} from "../../helpers/backend_helper"
function* fetchProducts() {
    try {
      const response = yield call(getMyProducts)
      yield put(getProductsSuccess(response["product"]))
    } catch (error) {
      yield put(getProductsFail(error))
    }
}
function* productsSaga() {
    yield takeEvery(GET_PRODUCTS, fetchProducts)
}
  
export default productsSaga