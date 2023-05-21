import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CivilCard from "./CivilCard";
import { RowCard } from "./Civil.styled";
import { Link } from "react-router-dom";
import { toSlugFormat, ucFirst } from "../../utils/textFormat";
import { motion, animate, stagger } from "framer-motion";
import { fetchAllCivilsNextPageAsync } from "../../features/Civil/CivilAsyncApi";

const CivilList = () => {
  const civilSelector = useSelector((state) => state.CivilReducer);

  const ready = civilSelector.status == "complete" ? true : false;
  const dispatch = useDispatch();

  const handleScroll = () => {
    const endOfPage =
      window.innerHeight + window.pageYOffset >= document.body.offsetHeight;

    if (endOfPage) {
      if (civilSelector.currentPage >= civilSelector.lastPage) return;
      dispatch(fetchAllCivilsNextPageAsync(civilSelector.currentPage));
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [civilSelector.currentPage]);

  return (
    <RowCard>
      {civilSelector.collection.length > 0 &&
        civilSelector.collection.map((civil, index) => (
          <motion.div
            initial={{ x: -15, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.25, type: "tween", delay: index * 0.15 }}
            key={civil.id}
          >
            <Link
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
          </motion.div>
        ))}
    </RowCard>
  );
};

export default CivilList;
