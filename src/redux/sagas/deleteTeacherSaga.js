import * as types from "../config/actionType"
import * as actions from "../actions/deleteTeacherAction"
import * as service from "../service/deleteTeacherService"
import { takeEvery, call, put} from "redux-saga/effects"

function* deleteTeacher(data){
    try{
        let response = yield call(service.removeTeacher, data)
        console.log(response)
        yield put(actions.deletedTeacher(response))
    }catch(err){
        console.log(err)
    }
}

export function* watchDeleteTeacher(){
    yield takeEvery(types.DELETE_TEACHER, deleteTeacher)
}

