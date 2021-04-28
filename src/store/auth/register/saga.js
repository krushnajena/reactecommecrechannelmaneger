import { takeEvery, put, call } from "redux-saga/effects"

//Account Redux states
import { REGISTER_USER } from "./actionTypes"
import { registerUserSuccessful, registerUserFailed } from "./actions"


// Is user register successfull then direct plot user in redux.
function* registerUser({ payload: { user } }) {
  try {
   
  } catch (error) {
    yield put(registerUserFailed(error))
  }
}

function* accountSaga() {
  yield takeEvery(REGISTER_USER, registerUser)
}

export default accountSaga
