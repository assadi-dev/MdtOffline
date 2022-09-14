export const processReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "START":
      return { ...state, message: "", step: "" };
    case "LOADING":
      return { ...state, message: payload, step: "loading" };
    case "FINISH":
      return { ...state, message: payload, step: "finish" };
    case "ERROR":
      return { ...state, message: payload, step: "error" };
    default:
      return state;
      break;
  }
};
