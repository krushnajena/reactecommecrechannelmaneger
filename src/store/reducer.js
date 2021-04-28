import { combineReducers } from "redux"

// Front
import Layout from "./layout/reducer"

// Authentication
import Login from "./auth/login/reducer"
import Account from "./auth/register/reducer"
import channelsr from "./channels/reducer"
import woocommerce from "./channels/woocommerce/reducer"
import productsr from "./products/reducer"
import ordersr from "./orders/reducer"

const rootReducer = combineReducers({
  // public
  Layout,
  Login,
  Account,
  channelsr,
  woocommerce,
  productsr,
  ordersr
 
})

export default rootReducer
