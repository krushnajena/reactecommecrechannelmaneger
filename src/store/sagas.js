import { all, fork } from "redux-saga/effects"

//public
import AccountSaga from "./auth/register/saga"
import AuthSaga from "./auth/login/saga"
import LayoutSaga from "./layout/saga"
import channelSaga from  "./channels/saga"
import woocommerceSaga from  "./channels/woocommerce/saga"
import products from  "./products/saga"
import ordersSaga from  "./orders/saga"

export default function* rootSaga() {
  yield all([
    //public
    fork(AccountSaga),
    fork(AuthSaga),
    
    fork(LayoutSaga),
    fork(channelSaga),
    fork(woocommerceSaga),
    fork(products),
    fork(ordersSaga),
    
  ])
}
