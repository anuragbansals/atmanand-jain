import * as types from "../config/actionType";

const initialState = {
  isLoading: false,
  data: [],
  error: "",
};

export const addWorkerReducer = (state = [], action) => {
  switch (action.type) {
    case ADDED_WORKER:
      return action;
    default:
      return state;
  }
};

export const getworkerReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_WORKER_LOADING:
      return {
        isLoading: true,
        error: "",
        data: [],
      };
    case types.GET_WORKER_SUCCESS:
      return {
        isLoading: false,
        data: action.payload,
        error: "",
      };
    case types.GET_WORKER_ERROR:
      return {
        isLoading: false,
        error: action.error,
        data: [],
      };
    default:
      return state;
  }
};
