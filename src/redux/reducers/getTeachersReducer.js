import * as types from "../config/actionType";

const initialState = {
  error: "",
  isLoading: false,
  data: []
}

export const getTeachersReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_TEACHERS_LOADING:
      return {
        ...initialState,
        isLoading:true,
      };
    case types.GET_TEACHERS_SUCCESS:
      return {
        ...initialState,
        isLoading:false,
        data: action.payload
      }
    case types.GET_TEACHERS_ERROR:
      return {
        isLoading:false,
        error: action.error
      }
    default:
      return state;
  }
};
