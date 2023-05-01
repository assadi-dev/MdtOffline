import uniqid from "uniqid";

export const waitingDispatch = [
  {
    id: "categories-en-attente-dispatch",
    title: "⌛ En Attente Dispatch",
    cards: [],
    background: "#131B26",
    color: "#FFFFFF",
  },
];

export const secteurSud = [
  {
    id: "categories-secteur-3",
    title: "Secteur 3",
    cards: [],
    background: "#131B26",
    color: "#FFFFFF",
  },
];

export const secteurNord = [
  {
    id: "categories-secteur-2",
    title: "Secteur 2",
    cards: [],
    background: "#FFBB33",
    color: "#131B26",
  },
];

export const horsTerrain = [
  {
    id: "categories-police-academy",
    title: "Police Academy",
    cards: [],
    background: "#33B5E5",
    color: "#131B26",
  },
  {
    id: "categories-tribunal",
    title: "Tribunal",
    cards: [],
    background: "#33B5E5",
    color: "#131B26",
  },
];

export const operationCenter = [
  {
    id: "categories-dispatcher",
    title: "Dispatcher",
    cards: [],
    background: "#131B26",
    color: "#FFFFFF",
  },
  {
    id: "categories-co-dispatcher",
    title: "Co-Dispatcher",
    cards: [],
    background: "#131B26",
    color: "#FFFFFF",
  },
  {
    id: "categories-operator",
    title: "Operator",
    cards: [],
    background: "#131B26",
    color: "#FFFFFF",
  },
  {
    id: "categories-supervisor",
    title: "Supervisor",
    cards: [],
    background: "#131B26",
    color: "#FFFFFF",
  },
];

export const infos = [
  {
    id: "categories-code",
    title: "Code",
    cards: [],
    background: "#131B26",
    color: "#FFFFFF",
  },
];

export const dropLists = [
  { id: `list-dispatch`, title: "Dispatch", categories: [] },
  { id: `list-secteur-sud`, title: "Secteur Sud", categories: [] },
  {
    id: `list-secteur-nord`,
    title: "Secteur Nord",
    categories: [],
  },
  {
    id: `list-hors-terrain`,
    title: "Hors Terrain",
    categories: [],
  },
  {
    id: `list-operation-center`,
    title: "Operation center",
    categories: [],
  },
  { id: `list-info`, title: "Infos", categories: [] },
];

console.log(JSON.stringify(dropLists));
