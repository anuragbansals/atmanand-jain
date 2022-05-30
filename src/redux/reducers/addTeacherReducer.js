import { ADDED_TEACHER } from "../config/actionType";

export const addTeacherReducer = (state = [], action) => {
  switch (action.type) {
    case ADDED_TEACHER:
      return action;
    default:
      return state;
  }
};
