import Api from "../../service/Api/Api";

export const fetchAllPanicbutton = () => {
  return Api.get("/panic_buttons");
};

export const deletPanicButton = (id) => {
  return Api.delete(`/panic_buttons/${id}`);
};
