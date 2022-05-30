import * as types from "../config/actionType"

export const loginUser = (data) => {
    return {
        type: types.LOGIN,
        data
    }
}


export const loggedIn = (action) => {
    return {
        type: types.LOGGED_IN,
        action
    }
}