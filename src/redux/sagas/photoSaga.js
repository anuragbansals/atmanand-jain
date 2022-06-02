import * as types from "../config/actionType";
import * as actions from "../actions/photosAction";
import * as service from "../service/photoService";
import { takeEvery, call, put } from "redux-saga/effects";

function* addPhoto(data) {
  try {
    let response = yield call(service.addPhoto, data.data);
    yield put(actions.addedPhoto(response));
  } catch (err) {
    console.log(err);
  }
}

export function* watchAddPhoto() {
  yield takeEvery(types.ADD_PHOTO, addPhoto);
}

function* getPhoto() {
  try {
    let response = yield call(service.getPhotos);
    yield put(actions.gotPhotos(response.data));
  } catch (err) {
    console.log(err);
  }
}

export function* watchGetPhotos() {
  yield takeEvery(types.GET_PHOTOS, getPhoto);
}
