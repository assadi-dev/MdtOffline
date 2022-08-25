/**
 * Permert d'optenir la vleur en UP
 * @param {number} amende
 * @param {string} peine
 * @returns
 */
export const conversionUP = (amende, peine) => {
  let result = 0;
  let nominal = 1;
  peine = new Date(peine).getTime();
  console.log(peine);

  result = (amende * 30) / 5000;
  result = result / 60;

  result = result / 24;

  result = result * nominal + peine;

  return result;
};
