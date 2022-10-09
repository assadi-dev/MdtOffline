import format from "date-fns/format";
import { fr } from "date-fns/locale";

/**
 * Date au format 15:00 - 05/08/2022
 * @param {datetime} date
 * @returns
 */
export const dateForCivilListView = (date) => {
  const dt = new Date(date);
  const result = format(dt, "HH:mm - dd/MM/yyyy", { locale: fr });
  return result;
};

/**
 * Date au format 05/08/2022 à 15h00
 * @param {datetime} date
 * @returns
 */
export const dateForModalTop = (date) => {
  const dt = new Date(date);
  const result = format(dt, "dd/MM/yyyy à HH:mm", { locale: fr });
  return result;
};

/**
 * Date au format  05-08-2022 22:30
 * @param {datetime} date
 * @returns
 */
export const dateFrenchFormat = (date) => {
  const dt = new Date(date);
  const result = format(dt, "dd-MM-yyyy HH:mm", { locale: fr });
  return result;
};
