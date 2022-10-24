import numeral from "numeral";

/**
 * Permert d'optenir la vleur en UP
 * @param {number} amende
 * @param {string} peine
 * @returns
 */
export const conversionUP = (amende, peine) => {
  let result = 0;
  let nominal = 1;

  peine = TimeToUnix(peine);

  result = (amende * 30) / 5000;
  result = result * 60;
  result = result * nominal + peine;

  return unixToTime(result);
};

/**
 * convertis le temps en chaine de caracteres en format Unix (millisecondes)
 * @param {string} time
 * @returns
 */
export const TimeToUnix = (time) => {
  let [hour, min, sec] = time.split(":");

  let totalTime = parseInt(hour) * 60 * 60;
  totalTime += parseInt(min) * 60;
  totalTime += parseInt(sec);
  return totalTime;
};

/**
 * convertis le temps en seconds en format H:m:s ex:00:00:05
 * @param {number} time
 * @returns
 */
export const unixToTime = (time) => {
  time = numeral(time);
  return time.format("00:00:00");
};

/**
 * obtenir le chef d'accusation courrante à partir du nom
 * @param {Array} lists Listes des chef d'accusations
 * @param {String} infractions nom de l'infraction
 */
export const findChefAccusationByName = (lists, infractions) => {
  if (!Array.isArray(lists)) {
    throw new Error("Le parametre lists doit etre un tableau");
  }

  return lists.find((cf) => cf.infraction === infractions);
};
