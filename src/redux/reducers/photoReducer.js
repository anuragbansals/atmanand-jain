import * as types from "../config/actionType";

const initialState = {
  isLoading: false,
  data: [],
  error: "",
};

export const addPhotoReducer = (state = [], action) => {
  switch (action.type) {
    case ADDED_PHOTO:
      return action;
    default:
      return state;
  }
};

export const getPhotoReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_PHOTOS_LOADING:
      return {
        ...initialState,
        isLoading: true,
      };
    case types.GET_PHOTOS_SUCCESS:
      return {
        isLoading: false,
        error: "",
        data: action.payload,
      };

    case types.GET_PHOTOS_ERROR:
      return {
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
