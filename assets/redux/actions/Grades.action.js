import Api from "../../service/Api/Api";
import { GET_ALL_GRADES } from "../types/Grades.type";

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
