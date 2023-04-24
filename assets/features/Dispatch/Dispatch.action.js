import { clean_name } from "./helper";

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
    console.log(droppableIdEnd);
    let categorieEnd = allCategories.find((cat) => droppableIdEnd == cat.id);

    categorieEnd.cards.splice(droppableIndexEnd, 0, ...card);
  }
};
