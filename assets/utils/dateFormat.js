import format from "date-fns/format";
import { fr } from "date-fns/locale";
import numeral from "numeral";
import formatDistanceStrict from "date-fns/formatDistanceStrict";
import getISOWeek from "date-fns/getISOWeek";

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

/**
 *Retourne le numero de la semaine à partir de la date
 */
export const getWeekNumber = (date) => {
  const dt = new Date(date);
  //const result = format(dt, "II", { locale: fr });
  const result = getISOWeek(dt, "II", { locale: fr });
  return result;
};

/**
 *Retourne le numero de la semaine à courrant
 */
export const getCurrentWeekNumber = () => {
  const dt = new Date();
  //const result = format(dt, "II", { locale: fr });
  const result = getISOWeek(dt, "II", { locale: fr });
  return result;
};

/**
 * Retourne la duree entre 2 datetime en secondes
 */

export const getDuration = (start, end) => {
  const A = new Date(start).getTime();
  const B = new Date(end).getTime();
  const result = formatDistanceStrict(A, B, {
    includeSeconds: true,
    locale: fr,
    addSuffix: false,
    unit: "second",
  });
  return result.split(" ")[0];
};

/**
 * Retourne la duree en format 0:00:15
 */

export const FormatDuration = (time) => {
  let number = numeral(Number(time));
  return number.format("00:00:00");
};
