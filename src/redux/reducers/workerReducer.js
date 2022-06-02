import {  ADDED_WORKER, GOT_WORKER,  } from "../config/actionType";

export const addWorkerReducer = (state = [], action) => {
  switch (action.type) {
    case ADDED_WORKER:
      return action;
    default:
      return state;
  }
};

export const getworkerReducer = (state = [], action) => {
    switch (action.type) {
      case GOT_WORKER:
        return action.action;
      default:
        return state;
    }
  };