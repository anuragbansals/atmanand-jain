import { GOT_TEACHERS } from "../config/actionType";

export const getTeachersReducer = (state = [], action) => {
  switch (action.type) {
    case GOT_TEACHERS:
      return action.action;
    default:
      return state;
  }
};
