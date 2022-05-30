import { ADDED_PHOTO, GOT_PHOTOS } from "../config/actionType";

export const addPhotoReducer = (state = [], action) => {
  switch (action.type) {
    case ADDED_PHOTO:
      return action;
    default:
      return state;
  }
};

export const getPhotoReducer = (state = [], action) => {
    switch (action.type) {
      case GOT_PHOTOS:
        console.log(action.action)
        return action;
      default:
        return state;
    }
  };