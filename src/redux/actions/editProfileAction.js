import * as types from "../config/actionType"

export const editProfile = (data) => {
    console.log(data)
    return {
        type: types.EDIT_PROFILE,
        data
    }
}

export const editedProfile = (data) => {
    return {
        type: types.EDITED_PROFILE,
        data
    }
}