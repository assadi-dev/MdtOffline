import { clean_name } from "./helper";
import uniqid from "uniqid";

export const sortDropList = (state, results) => {
  const {
    droppableIdStart,
    droppableIdEnd,
    droppableIndexStart,
    droppableIndexEnd,
    draggableId,
  } = results;

  let allCategories = [];

  for (const lists of state) {
    const { categories } = lists;

    categories.length > 0
      ? categories.forEach((cat) => allCategories.push(cat))
      : null;
  }

  //Si dans la meme list
  if (droppableIdStart == droppableIdEnd) {
    //Obtention de la categorie
    let categorie = allCategories.find(
      (categorie) => categorie.id == droppableIdStart
    );

    let card = categorie.cards.splice(droppableIndexStart, 1);
    categorie.cards.splice(droppableIndexEnd, 0, ...card);
  }
  //Si dans une differente list
  if (droppableIdStart != droppableIdEnd) {
    //Identifier la list et categorie de depart

    let categorieStart = allCategories.find(
      (categorie) => categorie.id == droppableIdStart
    );

    let card = categorieStart.cards.splice(droppableIndexStart, 1);

    //Identifier la list et categorie de destination
    let categorieEnd = allCategories.find((cat) => droppableIdEnd == cat.id);
    categorieEnd.cards.splice(droppableIndexEnd, 0, ...card);
  }
};

export const addCategoryDrop = (state, payload) => {
  const { id, title, background, color } = payload;

  const init_card_category = {
    id: `categories-${clean_name(title)}-${uniqid()}`,
    title: title,
    cards: [],
    background: background,
    color: color,
  };

  state.map((list) => {
    if (list.id == id) {
      list.categories.push(init_card_category);
    }
  });
};

export const creatCardAgent = (state, payload) => {
  const { matricule, username, grade } = payload;

  const init_card_agent = {
    id: "cards-" + uniqid(),
    grade: grade,
    agent: `${matricule}-${username}`,
    background: "var(--grey-color)",
    color: "var(--background-color-dark)",
  };

  const dispatchList =
    state.droplist[0].categorises["categories-en-attente-dispatch"].cards;

  dispatchList.push(init_card_agent);

  console.log(dispatchList);
};
