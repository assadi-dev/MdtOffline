import Api from "../../service/Api/Api";
import {
  ADD_GRADE,
  DELETE_GRADE,
  EDIT_GRADE,
  GET_ALL_GRADES,
} from "../types/Grades.type";

export const get_allGrades = () => {
  return async (dispatch) => {
    try {
      Api.get("/grades").then((res) => {
        const data = res.data;
        dispatch({ type: GET_ALL_GRADES, payload: data });
      });
    } catch (error) {}
  };
};

export const add_grade = (data) => {
  return async (dispatch) => {
    try {
      Api.post(`/grades`, data).then((res) => {
        const data = res.data;
        dispatch({ type: ADD_GRADE, payload: data });
      });
    } catch (error) {}
  };
};

export const edit_grades = (id, data) => {
  return async (dispatch) => {
    try {
      Api.put(`/grades/${id}`, data).then((res) => {
        const data = res.data;
        dispatch({ type: EDIT_GRADE, payload: data });
      });
    } catch (error) {}
  };
};

export const delete_grades = (id) => {
  return async (dispatch) => {
    try {
      Api.delete(`/grades/${id}`).then(() => {
        dispatch({ type: DELETE_GRADE, payload: { id } });
      });
    } catch (error) {}
  };
};
