import { createSlice } from "@reduxjs/toolkit";
import {
  addCivilAsync,
  getAllCivilsAsync,
  getOneCivilsAsync,
  searchCivilAsync,
} from "./CivilAsyncApi";

import {
  addDossierArrestationAsync,
  deleteDossierArrestationAsync,
  editDossierArrestationAsync,
  encloseAresstFolderAsync,
} from "../DossierArrestation/DossierArrestationAsyncApi";
import {
  addAvertissementAsync,
  deleteAvertissementAsync,
  editAvertissementAsync,
} from "../Avertissements/AvertissementAsynApi";
import {
  addTrafficAsync,
  deleteTrafficAsync,
  editTrafficAsync,
} from "../Traffic/TrafficAsyncApi";
import {
  addRapportArrestationAsync,
  deleteRapportArrestationAsync,
  editRapportArrestationAsync,
} from "../RapportArrestation/RapportArrestationAsyncApi";
import { addCelluleAsync } from "../Cellules/CellulesAsyncApi";
import { addPrisonAsync } from "../Prison/PrisonAsyncApi";
import { addConvocationAsync } from "../Convocation/ConvocationAsyncApi";

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

    builders.addCase(addRapportArrestationAsync.fulfilled, (state, action) => {
      const { payload } = action;
      state.selected.rapportArrestation = [
        payload,
        ...state.selected.rapportArrestation,
      ];
    });
    builders.addCase(editRapportArrestationAsync.fulfilled, (state, action) => {
      const { payload } = action;
      let updateRapportArrestation = state.selected.rapportArrestation.map(
        (rapportArrestation) => {
          if (rapportArrestation.id == payload.id) {
            return { ...payload };
          }
          return rapportArrestation;
        }
      );

      state.selected.rapportArrestation = updateRapportArrestation;
    });
    builders.addCase(
      deleteRapportArrestationAsync.fulfilled,
      (state, action) => {
        const { payload } = action;
        let removeRapporArrestation = state.selected.rapportArrestation.filter(
          (rapportArrestation) => rapportArrestation.id != payload.id
        );

        state.selected.rapportArrestation = removeRapporArrestation;
      }
    );

    builders.addCase(addDossierArrestationAsync.fulfilled, (state, action) => {
      const { payload } = action;
      state.selected.dossierArrestation = [
        payload,
        ...state.selected.dossierArrestation,
      ];
    });

    builders.addCase(editDossierArrestationAsync.fulfilled, (state, action) => {
      const { payload } = action;
      let updateDossierArrestation = state.selected.dossierArrestation.map(
        (dossierArrestation) => {
          if (dossierArrestation.id == payload.id) {
            return { ...payload };
          }
          return dossierArrestation;
        }
      );
      state.selected.dossierArrestation = updateDossierArrestation;
    });

    builders.addCase(
      deleteDossierArrestationAsync.fulfilled,
      (state, action) => {
        const { payload } = action;
        let removeDossierArrestation = state.selected.dossierArrestation.filter(
          (dossierArrestation) => dossierArrestation.id != payload.id
        );
        state.selected.dossierArrestation = removeDossierArrestation;
      }
    );

    builders.addCase(addCelluleAsync.fulfilled, (state, action) => {
      const { payload } = action;
      state.selected.cellule = [payload, ...state.selected.cellule];
    });

    builders.addCase(addPrisonAsync.fulfilled, (state, action) => {
      const { payload } = action;
      state.selected.prisons = [payload, ...state.selected.prisons];
    });

    builders.addCase(encloseAresstFolderAsync.fulfilled, (state, action) => {
      const { payload } = action;
      let update = state.selected.dossierArrestation.map((d) => {
        if (d.id == payload.id) {
          return { ...d, isEnclose: true };
        }
        return d;
      });

      state.selected.dossierArrestation = update;
    });

    builders.addCase(addConvocationAsync.fulfilled, (state, action) => {
      const { payload } = action;
      state.selected.convocation = [payload, ...state.selected.convocation];
    });
  },
});

export const { uploadPhoto } = CivilSlice.actions;

export default CivilSlice.reducer;
