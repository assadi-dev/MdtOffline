import justicejson from "./csvjson.json";

export const codePenal = justicejson.map((j) => {
  const reg = new RegExp(/[\n\r\s\t]+/g, "g");
  let amend = j.amende.replace("$", "");
  amend = amend.replace(reg, "");
  amend = parseInt(amend);
  return { ...j, amende: amend };
});

export const nominal = [
  { label: "Min 1", value: 0.25 },
  { label: "Min 2", value: 0.5 },
  { label: "Min 3", value: 0.75 },
  { label: "Nominal", value: 1 },
  { label: "Max 1", value: 1.5 },
  { label: "Max 2", value: 2 },
  { label: "Max 3", value: 3 },
];

export const tentative = 0.25,
  complicité = 0.6;
