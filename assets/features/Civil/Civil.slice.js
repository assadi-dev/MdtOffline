import { createSlice } from "@reduxjs/toolkit";
import {
  addCivilAsync,
  getAllCivilsAsync,
  getOneCivilsAsync,
  searchCivilAsync,
} from "./CivilAsyncApi";
import {
  addAvertissementAsync,
  addTrafficAsync,
  deleteAvertissementAsync,
  deleteTrafficAsync,
  editAvertissementAsync,
  editTrafficAsync,
} from "./CasierAsyncApi";

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
    builders.addCase(addAvertissementAsync.fulfilled, (state, action) => {
      const { payload } = action;
      state.selected.avertissements = [
        payload,
        ...state.selected.avertissements,
      ];
    });
    builders.addCase(editAvertissementAsync.fulfilled, (state, action) => {
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
    });
    builders.addCase(deleteAvertissementAsync.fulfilled, (state, action) => {
      const { payload } = action;
      let removeAvertissement = state.selected.avertissements.filter(
        (a) => a.id != payload.id
      );
      state.selected.avertissements = removeAvertissement;
    });
    builders.addCase(addTrafficAsync.fulfilled, (state, action) => {
      const { payload } = action;
      state.selected.traffics = [payload, ...state.selected.traffics];
    });
    builders.addCase(editTrafficAsync.fulfilled, (state, action) => {
      const { payload } = action;
      let updateTraffic = state.selected.traffics.map((traffic) => {
        if (traffic.id == payload.id) {
          return { ...payload };
        }
        return traffic;
      });
      state.selected.traffics = updateTraffic;
    });

    builders.addCase(deleteTrafficAsync.fulfilled, (state, action) => {
      const { payload } = action;
      let removeTraffic = state.selected.traffics.filter(
        (traffic) => traffic.id != payload.id
      );
      state.selected.traffics = removeTraffic;
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
