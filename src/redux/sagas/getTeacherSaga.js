import * as types from "../config/actionType";
import * as actions from "../actions/getTeachersAction";
import * as service from "../service/getTeacherService";
import { takeEvery, call, put } from "redux-saga/effects";

function* get() {
  try {
    let response = yield call(service.fetchTeachers);
    yield put(actions.gotTeacher(response.data));
  } catch (err) {
    console.log(err);
  }
}

export function* watchGetTeacher() {
  yield takeEvery(types.GET_TEACHERS, get);
}
