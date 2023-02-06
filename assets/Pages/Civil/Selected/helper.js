import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
import { TOKEN_STORAGE_NAME } from "../../../constants/localStorage";
export const sortDescListItems = (lists, keys) => {
  lists = Object.freeze(lists);
  return lists.slice().sort((a, b) => {
    a = new Date(a[keys]);
    b = new Date(b[keys]);
    return b.getTime() - a.getTime();
  });
};

export const isAllowedAction = (allowedGrades) => {
  const tokenStorage = Cookies.get(TOKEN_STORAGE_NAME);

  if (tokenStorage) {
    const decode = jwt_decode(tokenStorage);

    const usergrade = decode.categorie.toLowerCase();

    try {
      allowedGrades = allowedGrades.map((grade) => grade.toLowerCase());
      if (allowedGrades.includes(usergrade)) {
        return true;
      }
      return false;
    } catch (error) {
      return false;
    }
  }
};
