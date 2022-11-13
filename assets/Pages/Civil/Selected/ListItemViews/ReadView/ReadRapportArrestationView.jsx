import numeral from "numeral";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { codePenal, nominal } from "../../../../../Data/FichesCalcule";
import useFecthData from "../../../../../hooks/useFecthData";
import { edit_rapportArrestation } from "../../../../../redux/actions/RapportArrestation.action";
import {
  conversionUP,
  findChefAccusationByName,
  TimeToUnix,
  unixToTime,
} from "../../../../../utils/calculs";
import ButtonDefault from "../../../../../components/Shared/Buttons/ButtonDefault";
import CloseModalBtn from "../../../../../components/Shared/Modal/CloseModal";
import SelectMultiple from "../../../../../components/Shared/SelectMultiple";
import SwitchButton from "../../../../../components/Shared/SwitchButton";
import EditTable from "../../EditTable";
import {
  BorderZone,
  FooterSectionButton,
  HeadTitleView,
  TableViewPresentation,
} from "../../ModalView/ModalView.styled";
import useFecthDataWithParams from "../../../../../hooks/useFecthDataWithParams";

const ReadRapportArrestationView = ({ id, onClose }) => {
  let numeroFormat = numeral(id);
  const textAreaRef = useRef();
  const dispatch = useDispatch();
  const agent = useSelector((state) => state.AuthenticateReducer);
  const token = agent.token;
  const fetchContravention = useFecthDataWithParams("chef_accusations", {
    categorie: "Contravention",
  });
  const fetchInfractions = useFecthData("/chef_accusations");

  /**
   * Reset la taille du champs text
   */
  const closeModal = () => {
    onClose();
    let textInput = textAreaRef.current.querySelector("textarea");
    //textInput.removeAttribute("style");
  };

  const options = !fetchContravention.loading
    ? fetchInfractions.data.map((j) => {
        return {
          label: j.infraction,
          value: j.amendes,
          peine: j.peines,
          tentative: 1,
          complicite: 1,
          nominal: 1,
          qte: 1,
        };
      })
    : [];

  const [inputState, setInputState] = useState({
    lieux: "",
    chefAcusation: [],
    entreeCellule: "",
    up: false,
  });

  const { data, loading } = useFecthData(`/arrest_reports/${id}`);

  useEffect(() => {
    const { infractions, lieux, entreeCellule, conversionUp } = data;
    infractions &&
      setInputState((prevState) => ({
        ...prevState,
        lieux,
        entreeCellule,
        chefAcusation: infractions,
        up: conversionUp,
      }));
  }, [loading]);

  const total = useMemo(() => {
    if (inputState.chefAcusation.length > 0) {
      let sommeChefAccusation = inputState.chefAcusation.map(
        (c) => c.value * c.qte * c.nominal * c.tentative * c.complicite
      );
      let somme = sommeChefAccusation.reduce((a, b) => a + b);
      return somme.toFixed(2);
    }
    return 0;
  }, [inputState.chefAcusation]);

  const totalPeine = useMemo(() => {
    if (inputState.chefAcusation.length > 0) {
      let sommePeine = inputState.chefAcusation.map((c) => TimeToUnix(c.peine));
      return sommePeine.reduce((a, b) => a + b);
    }
    return 0;
  }, [inputState.chefAcusation, total, inputState.chefAcusation.peine]);

  const totalUp = useMemo(() => {
    let totalpeine = unixToTime(totalPeine);
    if (inputState.up) {
      return conversionUP(total, totalpeine);
    }
    return totalpeine;
  }, [total, inputState.chefAcusation, inputState.up]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onClose();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <HeadTitleView>
          <h2 className="titleView">
            RAPPORT D'ARRESTATION N°{numeroFormat.format("000")}
          </h2>
          <CloseModalBtn className="closeBtn" onClick={closeModal} />
        </HeadTitleView>
        <div className="form-control" ref={textAreaRef}>
          <BorderZone
            style={{
              height: "auto",
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <TableViewPresentation>
              <thead>
                <tr>
                  <th>Lieux de remplissage</th>
                  <th>Entrée cellule</th>
                  <th>Conversion $ -> UP</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="lieuxRemplissage">
                    <input
                      type="text"
                      name="lieuxRemplissage"
                      autoFocus
                      name="lieux"
                      value={inputState.lieux}
                      readOnly
                    />
                  </td>
                  <td>
                    <input
                      type="time"
                      name="entreeCellule"
                      className="entreCellule"
                      value={inputState.entreeCellule}
                      readOnly
                    />
                  </td>
                  <td>
                    <SwitchButton checked={inputState.up} disabled />
                  </td>
                </tr>
              </tbody>
            </TableViewPresentation>
          </BorderZone>
        </div>
        <div className="form-control">
          <SelectMultiple
            closeMenuOnSelect={false}
            classNamePrefix="react-select"
            isMulti
            options={options}
            placeholder="Choisissez un chef d'acusation"
            noOptionsMessage={() => null}
            name="chefAcusation"
            value={inputState.chefAcusation}
            isDisabled
          />
        </div>
        <div className="form-control">
          {" "}
          <EditTable>
            <thead>
              <tr>
                <th>Chef d'accusation</th>
                <th>Infos suplementaires</th>
                <th>Tentative</th>
                <th>Complicité</th>
                <th>Quantité</th>
                <th>Amende</th>
                <th>Peine</th>
              </tr>
            </thead>
            <tbody>
              {inputState.chefAcusation.map((chef, i) => (
                <tr key={i}>
                  <td>{chef.label}</td>
                  <td></td>
                  <td className="td-center">
                    <SwitchButton
                      sliderOffColor={"var(--color-blue-dark)"}
                      name={chef.label}
                      readOnly
                      checked={chef.tentative != 1 ? true : false}
                      disabled
                    />
                  </td>
                  <td className="td-center">
                    <SwitchButton
                      sliderOffColor={"var(--color-blue-dark)"}
                      name={chef.label}
                      readOnly
                      checked={chef.complicite != 1 ? true : false}
                      disabled
                    />
                  </td>
                  <td className="td-center">
                    <input
                      type="number"
                      name={chef.label}
                      value={chef ? chef.qte : 1}
                      readOnly
                      min={1}
                    />
                  </td>
                  <td>
                    <select
                      value={chef ? chef.nominal : 1}
                      name={chef.label}
                      disabled
                    >
                      {nominal.map((n, i) => (
                        <option key={i} value={n.value}>
                          {n.label}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td>{chef.peine}</td>
                </tr>
              ))}
            </tbody>
          </EditTable>
        </div>
        <div className="form-control">
          {" "}
          <BorderZone
            style={{
              height: "80px",
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            {" "}
            <div style={{ textAlign: "center" }}>
              {" "}
              <p className="label">Amende</p>{" "}
              <p className="mount">{inputState.up ? 0 : total} $</p>
            </div>
            <div style={{ textAlign: "center" }}>
              {" "}
              <p className="label">UP</p> <p className="mount">{totalUp}</p>
            </div>
          </BorderZone>
        </div>

        <FooterSectionButton>
          <ButtonDefault className="btn">Fermer</ButtonDefault>
        </FooterSectionButton>
      </form>
    </>
  );
};

export default ReadRapportArrestationView;
