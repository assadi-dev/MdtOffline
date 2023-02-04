import Api from "../../service/Api/Api";

export const get_allGrades = () => {
  return Api.get("/grades");
};

export const add_grade = (data) => {
  return Api.post(`/grades`, data);
};

export const edit_grades = (id, data) => {
  return Api.put(`/grades/${id}`, data);
};

export const delete_grades = (id) => {
  return Api.delete(`/grades/${id}`);
};
