import { DELETED_TEACHER } from "../config/actionType";

export const deleteTeacherReducer = (state = [], action) => {
  switch (action.type) {
    case DELETED_TEACHER:
      return action;
    default:
      return state;
  }
};
