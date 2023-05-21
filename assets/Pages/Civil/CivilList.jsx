import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CivilCard from "./CivilCard";
import { RowCard } from "./Civil.styled";
import { Link } from "react-router-dom";
import { toSlugFormat, ucFirst } from "../../utils/textFormat";

const CivilList = () => {
  const civilSelector = useSelector((state) => state.CivilReducer);

  return (
    <RowCard>
      {civilSelector.collection.length > 0 &&
        civilSelector.collection.map((civil) => (
          <Link
            key={civil.id}
            to={`../../../civil/${toSlugFormat(
              `${civil && civil.nom} ${civil && civil.prenom}`
            )}/${civil.id}`}
            state={{
              name: `${civil && civil.nom.toUpperCase()} ${
                civil && ucFirst(civil.prenom)
              }`,
              id: civil && civil.id,
            }}
          >
            {civil && (
              <CivilCard
                nom={civil.nom}
                prenom={ucFirst(civil.prenom)}
                telephone={civil.telephone}
                photo={civil.photo}
              />
            )}
          </Link>
        ))}
    </RowCard>
  );
};

export default CivilList;
