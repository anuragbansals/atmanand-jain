import * as types from "../config/actionType";
import * as actions from "../actions/addTeacherAction";
import * as service from "../service/addTeacherService";
import { takeEvery, call, put } from "redux-saga/effects";

function* add(data) {
  try {
    let response = yield call(service.addTeacher, data.data);
    yield put(actions.addedTeacher(response));
  } catch (err) {
    console.log(err);
  }
}

export function* watchAddTeacher() {
  yield takeEvery(types.ADD_TEACHER, add);
}
