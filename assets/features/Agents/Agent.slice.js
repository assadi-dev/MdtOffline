import { createSlice } from "@reduxjs/toolkit";
import {
  editAgentAsync,
  getAllAgentAsync,
  getOneAgentAsync,
} from "./AgentAsyncApi";

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
    builder
      .addCase(getOneAgentAsync.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(getOneAgentAsync.fulfilled, (state, action) => {
        state.error = "";
        state.selected = action.payload;
        state.status = "complete";
      });
    builder
      .addCase(editAgentAsync.fulfilled, (state, action) => {
        const { payload } = action;

        let updatedCollections = state.collections;
        updatedCollections = updatedCollections.map((agent) => {
          if (agent.id == payload.id) {
            return { ...payload };
          }
          return agent;
        });

        state.error = "";
        state.collections = updatedCollections;
        state.status = "complete";
      })
      .addCase(editAgentAsync.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default AgentSlice.reducer;
