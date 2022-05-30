import { EDITED_PROFILE } from "../config/actionType";

export const editProfileReducer = (state=[], action) => {
    switch(action.type){
        case EDITED_PROFILE:
            return action
        default: 
            return state
    }
}