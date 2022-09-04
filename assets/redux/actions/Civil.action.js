import {
  ADD_CIVIL,
  ENCLOSE_ARREST_FOLDER,
  GET_ALL_CIVIL,
  GET_ONE_CIVIL,
} from "../types/civil.type";
import Api from "../../service/Api/Api";

export const getAllCivil = () => {
  return async (dispatch) => {
    try {
      Api.get("/civils").then((res) => {
        dispatch({ payload: res.data, type: GET_ALL_CIVIL });
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const searchCivil = () => {
  return async (dispatch) => {
    try {
      Api.get("/civils", {
        params: { nom, prenom, telephone, affiliation },
      }).then((res) => {
        dispatch({ payload: res.data, type: GET_ALL_CIVIL });
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const getOneCivil = (id) => {
  return async (dispatch) => {
    try {
      Api.get("/civils/" + id).then((res) => {
        let data = res.data;

        data = {
          ...data,
          dossierArrestation: data.dossierArrestation.filter(
            (d) => d.isEnclose == false
          ),
        };

        dispatch({ payload: data, type: GET_ONE_CIVIL });
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const addCivil = (data) => {
  return async (dispatch) => {
    try {
      Api.post("/civils", data).then((res) => {
        let data = res.data;
        dispatch({ payload: data, type: ADD_CIVIL });
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};
