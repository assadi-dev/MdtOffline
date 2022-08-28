import { GET_ERRORS, SET_ERRORS } from "../types/Errors.type";

const initialState = { statusCode: 0, message: "", statusMessage: "" };

const ErrorsReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case GET_ERRORS:
      return state;
    case SET_ERRORS:
      return {
        ...state,
        statusCode: payload.statusCode,
        message: payload.message,
        statusMessage: payload.statusMessage,
      };

    default:
      return state;
      break;
  }
};
export default ErrorsReducer;
