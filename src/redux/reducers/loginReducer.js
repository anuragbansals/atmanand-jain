import {  LOGGED_IN } from "../config/actionType";

export const loginReducer = (state=[], action) => {
    switch(action.type){
        case LOGGED_IN:
            return action
        default: 
            return state
    }
}