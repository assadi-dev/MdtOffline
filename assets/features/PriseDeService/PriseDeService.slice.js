import { createSlice } from "@reduxjs/toolkit";
import {
  addServiceAsync,
  deleteServiceAsync,
  editServiceAsync,
  getLastActiveServiceAsync,
  getUserPriseServiceByWeekAsync,
} from "./PriseDeserviceAsyncApi";

const initialState = { collections: [], selected: {}, error: "", status: "" };

export const PriseDeServiceSlice = createSlice({
  name: "Prise-de-Service",
  initialState,
  reducers: {
    setError: (state, action) => {
      state.error = action.payload;
    },
    addSeeviceBtn: (state, action) => {
      const { payload } = action;
      state.collections = [payload, ...state.collections];
      state.selected = payload;
      state.status = "complete";
    },
  },
  extraReducers: (builders) => {
    builders
      .addCase(getUserPriseServiceByWeekAsync.pending, (state) => {
        state.status = "pending";
        state.error = "";
      })
      .addCase(getUserPriseServiceByWeekAsync.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(getUserPriseServiceByWeekAsync.fulfilled, (state, action) => {
        state.status = "complete";
        state.error = "";
        state.collections = action.payload;
      });

    builders.addCase(getLastActiveServiceAsync.fulfilled, (state, action) => {
      state.status = "complete";
      state.error = "";
      state.selected = action.payload;
    });

    builders.addCase(addServiceAsync.fulfilled, (state, action) => {
      const { payload } = action;
      state.collections = [payload, ...state.collections];
      state.selected = payload;
      state.status = "complete";
    });
    builders.addCase(editServiceAsync.fulfilled, (state, action) => {
      const { payload } = action;
      let updateCollection = state.collections.map((service) => {
        if (service.id == payload.id) {
          return payload;
        }
        return service;
      });

      state.collections = updateCollection;
      state.selected = payload;
      state.status = "complete";
    });
    builders.addCase(deleteServiceAsync.fulfilled, (state, action) => {
      const { id } = action.payload;
      let serviceItemRemoved = state.collections.filter(
        (service) => service.id != id
      );

      state.collections = serviceItemRemoved;
      state.status = "complete";
    });
  },
});

export const { addSeeviceBtn } = PriseDeServiceSlice.actions;

export default PriseDeServiceSlice.reducer;
