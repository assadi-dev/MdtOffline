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
  const { matricule, username, grade, agentId } = payload;

  const init_card_agent = {
    id: "cards-" + agentId,
    grade: grade,
    agent: `${matricule}-${username}`,
    background: "var(--grey-color)",
    color: "var(--background-color-dark)",
  };

  const dispatchList = state.dropLists[0].categories[0].cards;
  dispatchList.push(init_card_agent);
};

export const removeCardAgent = (state, payload, current) => {
  const { agentId } = payload;
  const cardId = "cards-" + agentId;
  checkAgentCards(agentId, state, current);
};

/**
 * Verifie dans chaques tableau cards de la categorie, l'existence de la carte de l'agent à supprimer
 * @param {*} agentId id de la carte de l'agent
 * @param {*} state
 * @param {*} current la categorie courrante
 */
const checkAgentCards = (agentId, state, current) => {
  let cloneState = current(state);
  const cardId = "cards-" + agentId;
  let dropLists = cloneState.dropLists;

  for (const listIndex in dropLists) {
    let categories = cloneState.dropLists[listIndex].categories;

    let cardsRemoved = removeAgent_recursive(cardId, categories);
    if (cardsRemoved) {
      state.dropLists[listIndex].categories.map((cat) => {
        if (cat.id == cardsRemoved.id) {
          cat.cards = cardsRemoved.cards;
        }
        return cat;
      });
    }
  }
};

const removeAgent_recursive = (cardId, categories) => {
  for (const categorieItems of categories) {
    let currentCat = { ...categorieItems };
    let findCard = categorieItems.cards.find((item) => item.id == cardId);
    if (findCard) {
      let cardRemoved = currentCat.cards.filter((item) => item.id != cardId);
      currentCat.cards = cardRemoved;
      return currentCat;
    }
  }
};

export const remove_categorie = (state, payload, current) => {
  const { id } = payload;
  let cloneState = current(state);
  let currentList = [];
  let dropLists = [...cloneState.dropLists];
  for (const list in dropLists) {
    let drop = { ...dropLists[list] };
    currentList = drop.categories.find((item) => item.id == id);
    if (currentList) {
      let categorieRemoved = drop.categories.filter((cat) => cat.id != id);
      drop.categories = categorieRemoved;
      state.dropLists[list] = drop;
      break;
    }
  }
};

/**
 * Récuperation de la categorie selection par id
 * @param {*} state
 * @param {*} payload
 * @param {*} current
 */
export const find_categorie = (state, payload, current) => {
  let cloneState = current(state);
  let dropLists = [...cloneState.dropLists];
  let currentList = [];
  for (const list of dropLists) {
    let drop = { ...list };
    currentList = drop.categories.find((item) => item.id == payload.id);
    if (currentList) {
      break;
    }
  }

  return currentList;
};

export const update_categorie = (state, payload, current) => {
  let cloneState = { ...state };
  let dropLists = [...cloneState.dropLists];
  let updateList = [];

  updateList = dropLists.map((list) => {
    list.categories.map((c) => {
      if (c.id == payload.id) {
        c.title = payload.title;
        c.background = payload.background;
        c.color = payload.color;
      }
      return c;
    });
    return list;
  });

  return updateList;
};
