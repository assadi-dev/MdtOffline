/**
 * Repositionne les element dans le tableau à partir de l'index en parametre
 * @param {Array} array Tableau
 * @param {Number} startIndex index de depart
 * @param {Number} endIndex index de destination
 * @returns {Array} Retourne un tableau avec les elements repositionné
 */
export const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

/**
 * Deplacement de l'item vers une autre zone
 * @param {*} source tableau source
 * @param {*} destination tableau source
 * @param {*} droppableSource index de la zone de depart
 * @param {*} droppableDestination index de la zone de destination
 * @returns
 */
export const move = (
  source,
  destination,
  droppableSource,
  droppableDestination
) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  const result = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;

  return result;
};
