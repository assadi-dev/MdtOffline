const initialState = [];

const TrafficReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    default:
      return state;
      break;
  }
};

export default TrafficReducer;
