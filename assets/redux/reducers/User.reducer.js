import {
  DELETE_USER,
  EDIT_USER,
  GET_ALL_USER,
  GET_SINGLE_USER,
  TOGGLE_VALIDATE_USER,
} from "../types/User.type";

const initialState = { collection: [], selected: [], isReady: false };

const UserReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_USER:
      return { ...state, collection: payload, isReady: true };
    case GET_SINGLE_USER:
      return { ...state, selected: payload, isReady: true };
    case TOGGLE_VALIDATE_USER:
      let updateValidationCollection = state.collection.map((user) => {
        if (user.id === payload.id) {
          return { ...user, validate: payload.validate };
        }
        return user;
      });
      return {
        ...state,
        collection: updateValidationCollection,
        isReady: true,
      };

    case EDIT_USER:
      let updateUserCollection = state.collection.map((user) => {
        if (user.id === payload.id) {
          return { ...user, ...payload };
        }
        return user;
      });
      return { ...state, collection: updateUserCollection, isReady: true };

    case DELETE_USER:
      let updateDeleteCollection = state.collection.map(
        (user) => user.id !== payload.id
      );

      return { ...state, collection: updateDeleteCollection, isReady: true };

    default:
      return state;
      break;
  }
};

export default UserReducer;
