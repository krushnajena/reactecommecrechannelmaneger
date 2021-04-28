import { takeEvery, put, call, takeLatest } from "redux-saga/effects"

// Login Redux States
import { LOGIN_USER, LOGOUT_USER, } from "./actionTypes"
import { loginSuccess, logoutUserSuccess, apiError } from "./actions"



import {
  postLogin
} from "../../../helpers/backend_helper"
import { de } from "date-fns/locale";


 function* loginUser ({ payload: { user, history } })  {
  try {
   
      const response = yield   call(postLogin, {
        email: user.email,
        password: user.password,
      })
      if(response["success"] == true){
        localStorage.setItem("authUser", response["token"]);
        yield put(loginSuccess(response))
        history.push("/dashboard")
      }
      else{
        console.log(response);
        yield put(apiError(response))
      }
    
  } catch (error) {
    console.log(error);
    yield put(apiError(error))
  }
}

function* logoutUser({ payload: { history } }) {
  try {
    localStorage.removeItem("authUser")

    
    history.push("/login")
  } catch (error) {
    yield put(apiError(error))
  }
}


function* authSaga() {
  yield takeEvery(LOGIN_USER, loginUser)
 
  yield takeEvery(LOGOUT_USER, logoutUser)
}

export default authSaga
