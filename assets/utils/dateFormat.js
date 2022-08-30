import format from "date-fns/format";
import { fr } from "date-fns/locale";

export const dateForCivilListView = (date) => {
  const dt = new Date(date);
  const result = format(dt, "HH:mm - dd/MM/yyyy", { locale: fr });
  return result;
};
