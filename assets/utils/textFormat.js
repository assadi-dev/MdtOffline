import numeral from "numeral";
import slugify from "slugify";

export const ucFirst = (text) => {
  let start = text.at(0).toUpperCase();
  let end = text.slice(1);
  return start + end;
};

export const toSlugFormat = (text) => {
  return slugify(text, {
    replacement: "-",
    remove: undefined,
    lower: true,
    strict: false,
    locale: "fr",
    trim: true,
  });
};

/**
 * Retourn un numero au format 000 a partir d'un chiffre en parametre.
 * @param {Number} number
 * @returns
 */
export const generateNumeroDossier = (number) => {
  let numeroFormat = numeral(number);
  return numeroFormat.format("000");
};
