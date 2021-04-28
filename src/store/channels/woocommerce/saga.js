import { takeEvery, put, call, takeLatest } from "redux-saga/effects"

// Login Redux States
import { POST_INTIGRATE_WOOCOMMERCE_CHANNEL, } from "./actionTypes"
import { post_intigrate_woocommerce_channel_success, post_intigrate_woocommerce_channel_failed } from "./actions"



import {
    postIntigrateNewChannel
} from "../../../helpers/backend_helper"
import { de } from "date-fns/locale";


 function* postIntigrateWoocommerce ({ payload: { channel, history } })  {
  try {
    const channelconfig={
        channelCode:"WooCommerce",
        channelLogo:"",
        channelName : channel.channelname,
        communicationBrandName : channel.brandname,
        configurations :{
            storeurl : channel.storeurl,
            consumerkey : channel.consumerkey,
            consumersecrate :channel.consumersecrate
        }


    }
      const response = yield   call(postIntigrateNewChannel, channelconfig)
      if(response["success"] == true){
       
        yield put(post_intigrate_woocommerce_channel_success(response))
        history.push("/dashboard")
      }
      else{
     
        yield put(post_intigrate_woocommerce_channel_failed(response))
      }
    
  } catch (error) {
    
    yield put(post_intigrate_woocommerce_channel_failed(error))
  }
}



function* woocommerceSaga() {
  yield takeEvery(POST_INTIGRATE_WOOCOMMERCE_CHANNEL, postIntigrateWoocommerce)
 
  
}

export default woocommerceSaga
