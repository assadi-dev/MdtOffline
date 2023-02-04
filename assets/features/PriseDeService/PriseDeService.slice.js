import { createSlice } from "@reduxjs/toolkit";

const initialState = { collections: [], selected: {}, error: "", status: "" };

export const PriseDeServiceSlice = createSlice({
  name: "Prise-de-Service",
  initialState,
  reducers: {
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export default PriseDeServiceSlice.reducer;
