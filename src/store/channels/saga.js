import { call, put, takeEvery } from "redux-saga/effects"

// Crypto Redux States
import { GET_CHANNELS, INTIGRATE_NEW_CHANNEL } from "./actionTypes"
import {
    
    getChannelSuccess,
    getChennelFail,
    getChannels,
    
} from "./actions"
import {
    getMyChannels
  } from "../../helpers/backend_helper"
function* fetchChannels() {
    try {
      const response = yield call(getMyChannels)
      console.log(response["channels"])
      yield put(getChannelSuccess(response["channels"]))
    } catch (error) {
      yield put(getChennelFail(error))
    }
  }
function* channelSaga() {
    yield takeEvery(GET_CHANNELS, fetchChannels)
   
   // yield takeEvery(LOGOUT_USER, logoutUser)
}
  
export default channelSaga