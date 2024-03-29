import { createSlice } from "@reduxjs/toolkit";
import {
  deleteUsersAsync,
  editUserAsync,
  getAllUsersAsync,
  validateUsersAsync,
} from "./UserAsyncApi";

const initialState = { collection: [], selected: [], error: "", status: "" };

const UserSlice = createSlice({
  name: "Users",
  initialState,
  reducers: {
    accountValidate: (state, action) => {
      const { payload } = action;
      let updateValidationCollection = state.collection;
      updateValidationCollection = updateValidationCollection.map((user) => {
        if (user.id === payload.id) {
          return { ...user, validate: payload.validate };
        }
        return user;
      });

      state.collection = updateValidationCollection;
    },
  },
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

    builders
      .addCase(editUserAsync.rejected, (state, action) => {
        const { error } = action;
        state.error = error.message;
      })
      .addCase(editUserAsync.fulfilled, (state, action) => {
        const { payload } = action;

        let updateUserCollection = state.collection.map((user) => {
          if (user.id === payload.id) {
            return { ...user, ...payload };
          }
          return user;
        });

        state.collection = updateUserCollection;
        state.selected = payload;
        state.error = "";
        state.status = "complete";
      });
  },
});

export const { accountValidate } = UserSlice.actions;

export default UserSlice.reducer;
