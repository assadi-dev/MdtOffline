import { createSlice } from "@reduxjs/toolkit";
import { getAllUsersAsync } from "./UserAsyncApi";

const initialState = { collection: [], selected: [], error: "", status: "" };

const UserSlice = createSlice({
  name: "Users",
  initialState,
  extraReducers: (builders) => {
    builders
      .addCase(getAllUsersAsync.fulfilled, (state, action) => {
        state.status = "complete";
        state.error = "";
        state.collection = action.payload;
      })
      .addCase(getAllUsersAsync.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default UserSlice.reducer;
