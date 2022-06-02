import * as types from "../config/actionType"
import * as actions from "../actions/editProfileAction"
import * as service from "../service/editProfileService"
import { takeEvery, call, put} from "redux-saga/effects"

function* edit(data){
    try{
        let response = yield call(service.editProfile, data)
        yield put(actions.editedProfile(response))
    }catch(err){
        console.log(err)
    }
}

export function* watchEditProfile(){
    yield takeEvery(types.EDIT_PROFILE, edit)
}

