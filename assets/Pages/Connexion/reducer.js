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
      return {
        ...state,
        message: payload.message,
        code: payload.code,
        step: "error",
      };
    default:
      return state;
      break;
  }
};

export const initialStateForgotten = {
  username: "",
  isLoading: false,
  step: "form-step-forgotten",
  result: "",
  message: "",
};
export const stepStateForgottenReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "form-step-forgotten":
      return initialStateForgotten;
    case "loading-forgotten":
      return {
        ...state,
        username: payload.username,
        isLoading: true,
        step: "loading",
      };
    case "result-forgotten":
      return {
        ...state,
        isLoading: false,
        step: "result",
        result: payload.status,
        message: payload.message,
      };

    default:
      return state;
  }
};
