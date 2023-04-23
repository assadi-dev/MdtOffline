import uniqid from "uniqid";

export const waitingDispatch = [
  {
    id: "categories-attente-dispatch",
    title: "⌛ En Attente Dispatch",
    cards: [
      {
        id: "cards-" + uniqid(),
        grade: "rookie",
        agent: "25-Aaron Smith",
        background: "var(--grey-color)",
        color: "var(--background-color-dark)",
      },
      {
        id: "cards-" + uniqid(),
        grade: "rookie",
        agent: "28-Sarah Smith",
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
    id: "categories-secteur-3",
    title: "Secteur 3",
    cards: [],
    background: "var(--background-color-dark)",
    color: "#fff",
  },
];

export const secteurNord = [
  {
    id: "categories-secteur-2",
    title: "Secteur 2",
    cards: [],
    background: "#FFBB33",
    color: "var(--background-color-dark)",
  },
];

export const horsTerrain = [
  {
    id: "categories-police-academy",
    title: "Police Academy",
    cards: [],
    background: "#33B5E5",
    color: "var(--background-color-dark)",
  },
  {
    id: "categories-tribunal",
    title: "Tribunal",
    cards: [],
    background: "#33B5E5",
    color: "var(--background-color-dark)",
  },
];

export const operationCenter = [
  {
    id: "categories-dispatcher",
    title: "Dispatcher",
    cards: [],
    background: "var(--background-color-dark)",
    color: "#fff",
  },
  {
    id: "categories-co-dispatcher",
    title: "Co-Dispatcher",
    cards: [],
    background: "var(--background-color-dark)",
    color: "#fff",
  },
  {
    id: "categories-operator",
    title: "Operator",
    cards: [],
    background: "var(--background-color-dark)",
    color: "#fff",
  },
  {
    id: "categories-supervisor",
    title: "Supervisor",
    cards: [],
    background: "var(--background-color-dark)",
    color: "#fff",
  },
];

export const infos = [
  {
    id: "categories-code",
    title: "Code",
    cards: [],
    background: "var(--background-color-dark)",
    color: "#fff",
  },
];

export const dropLists = [
  { id: `list-dispatch`, title: "Dispatch", categories: waitingDispatch },
  { id: `list-secteur-sud`, title: "Secteur Sud", categories: secteurSud },
  {
    id: `list-secteur-nord`,
    title: "Secteur Nord",
    categories: secteurNord,
  },
  {
    id: `list-hors-terrain`,
    title: "Hors Terrain",
    categories: horsTerrain,
  },
  {
    id: `list-operation-center`,
    title: "Operation center",
    categories: operationCenter,
  },
  { id: `list-info`, title: "Infos", categories: infos },
];
