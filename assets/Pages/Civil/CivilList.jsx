import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CivilCard from "./CivilCard";
import { RowCard } from "./Civil.styled";
import { Link } from "react-router-dom";
import { toSlugFormat, ucFirst } from "../../utils/textFormat";
import { animate, stagger } from "framer-motion";

const CivilList = () => {
  const civilSelector = useSelector((state) => state.CivilReducer);

  const ready = civilSelector.status == "complete" ? true : false;

  const staggerMenuItems = stagger(0.2);

  useEffect(() => {
    animate(
      ".test",
      { x: ready ? 0 : -100, opacity: ready ? 1 : 0 },
      { type: "tween", duration: 0.35, delay: ready ? staggerMenuItems : 0 }
    );
  }, [civilSelector.status]);

  return (
    <RowCard>
      {civilSelector.collection.length > 0 &&
        civilSelector.collection.map((civil, index) => (
          <Link
            className="test"
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
                index={index}
              />
            )}
          </Link>
        ))}
    </RowCard>
  );
};

export default CivilList;
