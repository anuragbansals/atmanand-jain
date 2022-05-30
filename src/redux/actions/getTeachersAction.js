import * as types from "../config/actionType";

export const getTeacher = () => {
  return {
    type: types.GET_TEACHERS,
  };
};

export const gotTeacher = (action) => {
  return {
    type: types.GOT_TEACHERS,
    action,
  };
};
