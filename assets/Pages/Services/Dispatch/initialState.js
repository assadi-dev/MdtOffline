import uniqid from "uniqid";

export const waitingDispatch = [
  {
    id: "categories-" + uniqid(),
    title: "⌛ En Attente Dispatch",
    cards: [
      {
        id: "cards-" + uniqid(),
        grade: "rookie",
        agent: "25-Aaron Smith",
        background: "var(--grey-color)",
        color: "var(--background-color-dark)",
      },
    ],
    background: "var(--background-color-dark)",
    color: "#fff",
  },
];

export const secteurSud = [
  {
    id: "categories-" + uniqid(),
    title: "Secteur Sud",
    cards: [],
    background: "var(--background-color-dark)",
    color: "#fff",
  },
];

export const secteurNord = [
  {
    id: "categories-" + uniqid(),
    title: "Secteur Nord",
    cards: [],
    background: "#FFBB33",
    color: "var(--background-color-dark)",
  },
];

export const horsTerrain = [
  {
    id: "categories-" + uniqid(),
    title: "Police Academy",
    cards: [],
    background: "#33B5E5",
    color: "var(--background-color-dark)",
  },
  {
    id: "categories-" + uniqid(),
    title: "Tribunal",
    cards: [],
    background: "#33B5E5",
    color: "var(--background-color-dark)",
  },
];

export const operationCenter = [
  {
    id: "categories-" + uniqid(),
    title: "Dispatcher",
    cards: [],
    background: "var(--background-color-dark)",
    color: "#fff",
  },
  {
    id: "categories-" + uniqid(),
    title: "Co-Dispatcher",
    cards: [],
    background: "var(--background-color-dark)",
    color: "#fff",
  },
  {
    id: "categories-" + uniqid(),
    title: "Operator",
    cards: [],
    background: "var(--background-color-dark)",
    color: "#fff",
  },
  {
    id: "categories-" + uniqid(),
    title: "Supervisor",
    cards: [],
    background: "var(--background-color-dark)",
    color: "#fff",
  },
];

export const infos = [
  {
    id: "categories-" + uniqid(),
    title: "Code",
    cards: [],
    background: "var(--background-color-dark)",
    color: "#fff",
  },
];

export const dropLists = [
  { id: `categorie-dispatch`, title: "Dispatch", categories: waitingDispatch },
  { id: `categorie-secteur-sud`, title: "Secteur Sud", categories: secteurSud },
  {
    id: `categorie-secteur-nord`,
    title: "Secteur Nord",
    categories: secteurNord,
  },
  {
    id: `categorie-hors-terrain`,
    title: "Hors Terrain",
    categories: horsTerrain,
  },
  {
    id: `categorie-operation-center`,
    title: "Operation center",
    categories: operationCenter,
  },
  { id: `categorie-info`, title: "Infos", categories: infos },
];
