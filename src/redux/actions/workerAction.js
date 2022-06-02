import * as types from "../config/actionType";

export const addWorker = (data) => {
  return {
    type: types.ADD_WORKER,
    data,
  };
};

export const addedWorker = (action) => {
  return {
    type: types.ADDED_WORKER,
    action,
  };
};

export const getWorker = () => {
  return {
    type: types.GET_WORKER,
  };
};

export const gotWorker = (action) => {
  return {
    type: types.GOT_WORKER,
    action,
  };
};
