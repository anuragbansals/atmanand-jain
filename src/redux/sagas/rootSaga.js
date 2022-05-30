import { all } from "redux-saga/effects";
import { watchAddTeacher } from "./addTeacherSaga";
import { watchDeleteTeacher } from "./deleteTeacherSaga";
import { watchEditProfile } from "./editProfileSaga";
import { watchGetTeacher } from "./getTeacherSaga";
import { watchLoginUser } from "./loginSaga";
import { watchAddPhoto, watchGetPhotos } from "./photoSaga";

function* rootSaga() {
  yield all([
    watchEditProfile(),
    watchDeleteTeacher(),
    watchAddTeacher(),
    watchLoginUser(),
    watchGetTeacher(),
    watchAddPhoto(),
    watchGetPhotos(),
  ]);
}

export default rootSaga;
