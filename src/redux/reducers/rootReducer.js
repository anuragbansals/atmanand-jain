import { combineReducers } from "redux";
import { addPhotoReducer, getPhotoReducer } from "./photoReducer";
import { addTeacherReducer } from "./addTeacherReducer";
import { deleteTeacherReducer } from "./deleteTeacherReducer";
import { editProfileReducer } from "./editProfileReducer";
import { getTeachersReducer } from "./getTeachersReducer";
import { loginReducer } from "./loginReducer";

export default combineReducers({
    editedProfile: editProfileReducer,
    deletedTeacher: deleteTeacherReducer,
    addedTeacher: addTeacherReducer,
    user: loginReducer,
    teachers: getTeachersReducer,
    photo: addPhotoReducer,
    photos: getPhotoReducer
})