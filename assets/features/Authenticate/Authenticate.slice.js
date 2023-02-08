import { createSlice } from "@reduxjs/toolkit";
import {
  UploadPhotoOwnerAsync,
  editAccountAsync,
  getOwnerdAsync,
} from "./AuthenticateAsyncAction";

const initialState = {
  role: "",
  id: "",
  username: "",
  matricule: "",
  telephone: "",
  grade: "",
  token: "",
  isLoggedIn: false,
  error: "",
  status: "idle",
};

export const AuthenticateSlice = createSlice({
  name: "Authenticate",
  initialState,
  reducers: {
    useerLogged: (state, action) => {
      state.id = action.payload.id;
      state.role = action.payload.role;
      state.isLoggedIn = true;
    },

    setError: (state, action) => {
      state.errors = action.payload;
    },
    userlogout: (state) => {
      state.role = [];
      state.username = "";
      state.matricule = "";
      state.token = "";
      state.grade = "";
      state.isLoggedIn = false;
      state.error = "";
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getOwnerdAsync.pending, (state) => {
        state.status = "pending";
        state.error = "";
      })
      .addCase(getOwnerdAsync.fulfilled, (state, action) => {
        const { payload } = action;
        return { ...state, ...payload, status: "complete", isLoggedIn: true };
      })
      .addCase(getOwnerdAsync.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      });
    builder
      /*       .addCase(editAccountAsync.pending, (state) => {
        state.status = "pending";
        state.error = "";
      }) */
      .addCase(editAccountAsync.fulfilled, (state, action) => {
        const { payload } = action;
        return {
          ...state,
          username: payload.name,
          telephone: payload.telephone,
          photo: payload.photo,
          status: "complete",
          isLoggedIn: true,
        };
      })
      .addCase(editAccountAsync.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      });
    builder
      /*       .addCase(UploadPhotoOwnerAsync.pending, (state) => {
        state.status = "pending";
        state.error = "";
      }) */
      .addCase(UploadPhotoOwnerAsync.fulfilled, (state, action) => {
        const { payload } = action;
        return {
          ...state,
          ...payload,
          status: "complete",
          isLoggedIn: true,
        };
      })
      .addCase(UploadPhotoOwnerAsync.rejected, (state, action) => {
        const { payload, error } = action;
        return {
          ...state,
          error: error.message,
          status: "rejected",
        };
      });
  },
});

export const { useerLogged, setError, userlogout } = AuthenticateSlice.actions;

export default AuthenticateSlice.reducer;
