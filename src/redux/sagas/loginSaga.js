import * as types from "../config/actionType";
import * as actions from "../actions/loginAction";
import * as service from "../service/loginService";
import { takeEvery, call, put } from "redux-saga/effects";
import Cookie from "universal-cookie"

function* login(data) {
  try {
    let response = yield call(service.authenticate, data);
    console.log(response);
    const cookie = new Cookie();
    cookie.set("token",response.data.jwt)
    yield put(actions.loggedIn(response));
  } catch (err) {
    console.log(err);
  }
}

export function* watchLoginUser() {
  yield takeEvery(types.LOGIN, login);
}
