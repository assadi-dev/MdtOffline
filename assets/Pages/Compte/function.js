import Api from "../../service/Api/Api";
export const updatePassword = (data) => {
  const { id, password, confirm } = data;
  return new Promise(async (resolve, reject) => {
    try {
      const res = await Api.put(`/update_password/${id}`, {
        password,
        confirm,
      });
      return resolve(res.data);
    } catch (error) {
      let errorMessage = error.message;
      if (error.response) {
        errorMessage = error.response.data;
      }
      return reject(errorMessage);
    }
  });
};
