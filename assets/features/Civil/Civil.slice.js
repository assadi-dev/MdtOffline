import { createSlice } from "@reduxjs/toolkit";
import {
  addCivilAsync,
  getAllCivilsAsync,
  getOneCivilsAsync,
  searchCivilAsync,
} from "./CivilAsyncApi";

const initialState = {
  collection: [],
  selected: [],
  filter: [],
  error: "",
  status: "",
};

export const CivilSlice = createSlice({
  name: "Civils",
  initialState,
  reducers: {
    setError: (state, action) => {
      state.errors = action.payload;
    },
    uploadPhoto: (state, { payload }) => {
      let newStateCollection = state.collection;
      const civilIndex = newStateCollection.findIndex(
        (c) => c.id == payload.id
      );
      newStateCollection[civilIndex].photo = payload.photo;
      state.collection = newStateCollection;
      state.selected = { ...state.selected, photo: payload.photo };
    },
    addAvertissement: (state, action) => {
      const { payload } = action;
      state.selected.avertissements = [
        payload,
        ...state.selected.avertissements,
      ];
    },
    editAvertissement: (state, action) => {
      const { payload } = action;
      let updateAvertissement = state.selected.avertissements.map(
        (avertissement) => {
          if (avertissement.id == payload.id) {
            return { ...payload };
          }
          return avertissement;
        }
      );
      state.selected.avertissements = updateAvertissement;
    },

    deleteAvertissement: (state, { payload }) => {
      let removeAvertissement = state.selected.avertissements.filter(
        (a) => a.id != payload.id
      );

      state.selected.avertissements = removeAvertissement;
    },
  },

  extraReducers: (builders) => {
    builders
      .addCase(getAllCivilsAsync.pending, (state) => {
        state.error = "";
        state.status = "pending";
      })
      .addCase(getAllCivilsAsync.fulfilled, (state, action) => {
        const { payload } = action;
        state.status = "complete";
        state.collection = payload;
      })
      .addCase(getAllCivilsAsync.rejected, (state, { error }) => {
        state.error = error.message;
      });
    //Get One Civil
    builders
      .addCase(getOneCivilsAsync.pending, (state) => {
        state.error = "";
        state.status = "pending";
      })
      .addCase(getOneCivilsAsync.fulfilled, (state, action) => {
        const { payload } = action;
        state.status = "complete";
        state.selected = payload;
      })
      .addCase(getOneCivilsAsync.rejected, (state, { error }) => {
        state.error = error.message;
      });
    builders
      .addCase(addCivilAsync.fulfilled, (state, action) => {
        const { payload } = action;
        state.collection = [...state.collection, payload];
      })
      .addCase(addCivilAsync.rejected, (state, action) => {
        state.error = action.error.message;
      });
    builders
      .addCase(searchCivilAsync.pending, (state) => {
        state.status = "pending";
        state.error = "";
      })
      .addCase(searchCivilAsync.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(searchCivilAsync.fulfilled, (state, action) => {
        state.status = "complete";
        state.error = "";
        state.collection = action.payload;
      });
  },
});

export const {
  uploadPhoto,
  addAvertissement,
  editAvertissement,
  deleteAvertissement,
} = CivilSlice.actions;

export default CivilSlice.reducer;
