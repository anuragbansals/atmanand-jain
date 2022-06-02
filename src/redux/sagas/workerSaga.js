import * as types from "../config/actionType";
import * as actions from "../actions/workerAction";
import * as service from "../service/workerService";
import { takeEvery, call, put } from "redux-saga/effects";

function* add(data) {
  try {
    let response = yield call(service.addWorker, data.data);
    yield put(actions.addedWorker(response));
  } catch (err) {
    console.log(err);
  }
}

export function* watchAddWorker() {
  yield takeEvery(types.ADD_WORKER, add);
}

function* getWorker() {
  try {
    let response = yield call(service.getWorkers);
    yield put(actions.gotWorker(response.data));
  } catch (err) {
    console.log(err);
  }
}

export function* watchGetWorker() {
  yield takeEvery(types.GET_WORKER, getWorker);
}
