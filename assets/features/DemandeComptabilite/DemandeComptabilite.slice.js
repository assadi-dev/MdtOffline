import { createSlice } from "@reduxjs/toolkit";
import {
  addDemandeComptabiliteAsync,
  deleteDemandeComptabiliteAsync,
  editDemandeComptabiliteAsync,
  getAllDemandeComptabiliteAsync,
  getOneDemandeComptabiliteAsync,
} from "./DemandeComptabiliteAsyncApi";

const initialState = { collections: [], selected: [], status: "", errors: "" };

export const DemandeComptabiliteSlice = createSlice({
  name: "DemandeComptabilite",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllDemandeComptabiliteAsync.pending, (state) => {
        state.status = "pending";
        state.errors = "";
      })
      .addCase(getAllDemandeComptabiliteAsync.rejected, (state, action) => {
        const { error } = action;
        state.errors = error.message;
      })
      .addCase(getAllDemandeComptabiliteAsync.fulfilled, (state, action) => {
        state.collections = action.payload;
        state.status = "complete";
      });
    builder.addCase(
      getOneDemandeComptabiliteAsync.fulfilled,
      (state, action) => {
        state.selected = action.payload;
        state.status = "complete";
      }
    );
    builder
      .addCase(addDemandeComptabiliteAsync.fulfilled, (state, action) => {
        const { payload } = action;
        state.collections = [payload, ...state.collections];
      })
      .addCase(addDemandeComptabiliteAsync.rejected, (state, action) => {
        const { error } = action;
        state.errors = error.message;
      });
    builder
      .addCase(deleteDemandeComptabiliteAsync.fulfilled, (state, action) => {
        const { payload } = action;
        let removedDemand = state.collections.filter(
          (demand) => demand.id != payload.id
        );
        state.collections = removedDemand;
      })
      .addCase(deleteDemandeComptabiliteAsync.rejected, (state, action) => {
        const { error } = action;
        state.errors = error.message;
      });
    builder
      .addCase(editDemandeComptabiliteAsync.fulfilled, (state, action) => {
        const { payload } = action;
        let updateDemandCollections = state.collections.map((demand) => {
          if (demand.id == payload.id) {
            return { ...payload };
          }
          return demand;
        });
        state.collections = updateDemandCollections;
        state.selected = payload;
      })
      .addCase(editDemandeComptabiliteAsync.rejected, (state, action) => {
        const { error } = action;
        state.errors = error.message;
      });
  },
});

export default DemandeComptabiliteSlice.reducer;
