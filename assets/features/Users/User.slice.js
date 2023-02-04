import { createSlice } from "@reduxjs/toolkit";
import {
  deleteUsersAsync,
  getAllUsersAsync,
  validateUsersAsync,
} from "./UserAsyncApi";

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

    builders
      .addCase(validateUsersAsync.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(validateUsersAsync.fulfilled, (state, action) => {
        const { payload } = action;
        let updateValidationCollection = state.collection;
        updateValidationCollection = updateValidationCollection.map((user) => {
          if (user.id === payload.id) {
            return { ...user, validate: payload.validate };
          }
          return user;
        });
        state.error = "";
        state.status = "complete";
        state.collection = updateValidationCollection;
      });

    builders
      .addCase(deleteUsersAsync.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(deleteUsersAsync.fulfilled, (state, action) => {
        const { payload } = action;
        let userCollection = state.collection;
        let removeduser = userCollection.filter(
          (user) => user.id != payload.id
        );
        state.collection = removeduser;
        state.status = "complete";
        state.error = "";
      });
  },
});

export default UserSlice.reducer;
