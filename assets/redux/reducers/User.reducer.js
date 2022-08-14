const initialState = [];

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_USER_DATA":
      break;

    default:
      return state;
      break;
  }
};
