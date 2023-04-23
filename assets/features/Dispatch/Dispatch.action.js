export const sortDropList = (state, results) => {
  const {
    droppableIdStart,
    droppableIdEnd,
    droppableIndexStart,
    droppableIndexEnd,
    draggableId,
  } = results;
  console.log(results);

  let copy = [...state];

  //Si dans la meme list
  if (droppableIdStart == droppableIdEnd) {
    let lists = copy.find((cat) =>
      droppableIdStart.includes(cat.title.toLowerCase())
    );

    //Obtention de la categorie
    let categorie = lists.categories.find(
      (categorie) => categorie.id == droppableIdStart
    );

    let card = categorie.cards;
    card.splice(droppableIndexStart, 1);
    console.log(card);
  }
};
