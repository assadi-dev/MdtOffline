import { createSlice } from "@reduxjs/toolkit";
import { getAllAgentAsync } from "./AgentAsyncApi";

const initialState = {
  collections: [],
  filtered: [],
  selected: [],
  status: "",
  error: "",
};

export const AgentSlice = createSlice({
  name: "Agent",
  initialState,
  reducers: {
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllAgentAsync.pending, (state) => {
        state.status = "pending";
        state.error = "";
      })
      .addCase(getAllAgentAsync.fulfilled, (state, action) => {
        state.status = "complete";
        state.error = "";
        state.collections = action.payload;
      });
  },
});

export default AgentSlice.reducer;
