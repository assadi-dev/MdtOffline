import React, { useMemo, useRef, useState } from "react";
import ButtonDefault from "../../../../components/Shared/Buttons/ButtonDefault";
import CloseModalBtn from "../../../../components/Shared/Modal/CloseModal";
import SelectMultiple from "../../../../components/Shared/SelectMultiple";
import {
  BorderZone,
  FooterSectionButton,
  HeadTitleView,
  TableViewPresentation,
} from "./ModalView.styled";
import { codePenal, nominal } from "../../../../Data/FichesCalcule";
import SwitchButton from "../../../../components/Shared/SwitchButton";
import EditTable from "../EditTable";
import {
  conversionUP,
  findChefAccusationByName,
  TimeToUnix,
  unixToTime,
} from "../../../../utils/calculs";
import { useDispatch, useSelector } from "react-redux";
import { add_rapportArrestation } from "../../../../redux/actions/RapportArrestation.action";
import useFecthDataWithParams from "../../../../hooks/useFecthDataWithParams";
import {
  addCivilCelluleAsync,
  addCivilRapportArrestationAsync,
} from "../../../../features/Civil/CasierAsyncApi";
import {
  addDateByHour,
  dateFrenchFormat,
  obtainDate,
} from "../../../../utils/dateFormat";
import { generateNumeroDossier, ucFirst } from "../../../../utils/textFormat";
import { sendCelluleToDiscord } from "../SendDiscord/SendDiscord";

const RapportArrestationView = ({ idCivil, onClose }) => {
  const textAreaRef = useRef();
  const dispatch = useDispatch();
  const agent = useSelector((state) => state.AuthenticateReducer);
  const token = agent.token;
  const civilSelectore = useSelector((state) => state.CivilReducer);

  const fetchContravention = useFecthDataWithParams("chef_accusations", {
    categorie: ["Contravention", "Délit mineur", "Délit majeur"],
  });
  /**
   * Reset la taille du champs text
   */
  const closeModal = () => {
    onClose();
    let textInput = textAreaRef.current.querySelector("textarea");
    //textInput.removeAttribute("style");
  };

  const options = fetchContravention.data.map((j) => {
    return {
      label: j.infraction,
      value: j.amendes,
      peine: j.peines,
      tentative: 1,
      complicite: 1,
      nominal: 1,
      qte: 1,
    };
  });

  const [inputState, setInputState] = useState({
    lieux: "",
    chefAcusation: [],
    entreeCellule: "",
    up: false,
  });

  const handleChangeValue = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInputState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSelectChefAcusation = (select) => {
    setInputState((prevState) => ({
      ...prevState,
      chefAcusation: select,
    }));
  };

  const handleQty = (e) => {
    let name = e.target.name;
    let value = e.target.value || 1;
    let currentPeine = findChefAccusationByName(
      fetchContravention.data,
      name
    ).peines;
    let qte = parseInt(value);
    if (inputState.chefAcusation.length > 0) {
      setInputState((prevState) => ({
        ...prevState,
        chefAcusation: prevState.chefAcusation.map((cf) => {
          {
            if (cf.label == name) {
              let peine = unixToTime(
                TimeToUnix(currentPeine) *
                  qte *
                  cf.complicite *
                  cf.tentative *
                  cf.nominal
              );
              return { ...cf, qte, peine };
            }
          }
          return cf;
        }),
      }));
    }
  };

  const handleNominal = (e) => {
    let name = e.target.name;
    let value = e.target.value || 1;
    let currentPeine = findChefAccusationByName(
      fetchContravention.data,
      name
    ).peines;
    let nominal = parseFloat(value);
    if (inputState.chefAcusation.length > 0) {
      setInputState((prevState) => ({
        ...prevState,
        chefAcusation: prevState.chefAcusation.map((cf) => {
          {
            if (cf.label == name) {
              let peine = unixToTime(
                TimeToUnix(currentPeine) *
                  cf.tentative *
                  cf.complicite *
                  cf.qte *
                  nominal
              );
              return { ...cf, nominal, peine };
            }
          }
          return cf;
        }),
      }));
    }
  };

  const handleTentative = (e) => {
    let name = e.target.name;
    let value = e.target.checked;
    let tentative = value ? 0.25 : 1;
    let currentPeine = findChefAccusationByName(
      fetchContravention.data,
      name
    ).peines;

    if (inputState.chefAcusation.length > 0) {
      setInputState((prevState) => ({
        ...prevState,
        chefAcusation: prevState.chefAcusation.map((cf) => {
          {
            if (cf.label == name) {
              let peine = unixToTime(
                TimeToUnix(currentPeine) *
                  tentative *
                  cf.complicite *
                  cf.qte *
                  cf.nominal
              );

              return { ...cf, tentative, peine };
            }
          }
          return cf;
        }),
      }));
    }
  };

  const handleComplicite = (e) => {
    let name = e.target.name;
    let checked = e.target.checked;
    let complicite = checked ? 0.6 : 1;
    let currentPeine = findChefAccusationByName(
      fetchContravention.data,
      name
    ).peines;
    if (inputState.chefAcusation.length > 0) {
      let updateChefAccusation = inputState.chefAcusation.map((cf) => {
        {
          if (cf.label == name) {
            let peine = unixToTime(
              TimeToUnix(currentPeine) *
                complicite *
                cf.tentative *
                cf.qte *
                cf.nominal
            );

            return { ...cf, complicite, peine };
          }
        }
        return cf;
      });

      setInputState((prevState) => ({
        ...prevState,
        chefAcusation: updateChefAccusation,
      }));
    }
  };

  const handleToggleUP = () => {
    setInputState((prevState) => ({ ...prevState, up: !prevState.up }));
  };

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

    let infractions = inputState.chefAcusation;
    let data = {
      infractions,
      lieux: inputState.lieux,
      entreeCellule: inputState.entreeCellule,
      agent: `${agent.matricule}-${agent.username}`,
      civil: `api/civils/${idCivil}`,
      amende: total,
      peine: totalUp,
      conversionUp: inputState.up,
      idAgent: agent.idAgent,
    };

    const civilData = civilSelectore.selected;

    dispatch(addCivilRapportArrestationAsync(data))
      .unwrap()
      .then((res) => {
        const { entreeCellule, peine } = res;
        const { idAgent, civil, agent } = data;
        let dateEntree = `${obtainDate()} ${entreeCellule}`;
        let dateSortie = addDateByHour(dateEntree, peine);
        let arrestReport = res.id;
        let createCellule = {
          entree: new Date(dateEntree),
          sortie: new Date(dateSortie),
          civil: civil,
          idAgent: parseInt(idAgent),
          arrestReport,
          idArrestReport: `api/arrest_reports/${res.id}`,
        };

        dispatch(addCivilCelluleAsync(createCellule))
          .unwrap()
          .then((res) => {
            const { prenom, nom, photo } = civilData;
            const { entree, sortie, idAgent, arrestReport, arrestFolder } =
              createCellule;

            let dataDiscord = {
              name: `${ucFirst(prenom)} ${ucFirst(nom)}`,
              entree: dateFrenchFormat(entree),
              sortie: dateFrenchFormat(sortie),
              agent: agent,
              arrestReport: generateNumeroDossier(arrestReport),
              arrestFolder: generateNumeroDossier(arrestFolder),
              photo,
            };

            sendCelluleToDiscord(dataDiscord);
          });
        onClose();
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <HeadTitleView>
          <h2 className="titleView">RAPPORT D'ARRESTATION</h2>
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
                  <th>Conversion $ {"->"} UP</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="lieuxRemplissage">
                    <input
                      type="text"
                      autoFocus
                      name="lieux"
                      value={inputState.lieux}
                      onChange={handleChangeValue}
                    />
                  </td>
                  <td>
                    <input
                      type="time"
                      name="entreeCellule"
                      className="entreCellule"
                      value={inputState.entreeCellule}
                      onChange={handleChangeValue}
                    />
                  </td>
                  <td>
                    <SwitchButton
                      checked={inputState.up}
                      onChange={handleToggleUP}
                    />
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
            onChange={handleSelectChefAcusation}
            value={inputState.chefAcusation}
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
                      onChange={handleTentative}
                    />
                  </td>
                  <td className="td-center">
                    <SwitchButton
                      sliderOffColor={"var(--color-blue-dark)"}
                      name={chef.label}
                      onChange={handleComplicite}
                    />
                  </td>
                  <td className="td-center">
                    <input
                      type="number"
                      name={chef.label}
                      value={chef ? chef.qte : 1}
                      onChange={handleQty}
                      min={1}
                    />
                  </td>
                  <td>
                    <select
                      value={chef ? chef.nominal : 1}
                      name={chef.label}
                      onChange={handleNominal}
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
          <ButtonDefault className="btn">Envoyer</ButtonDefault>
        </FooterSectionButton>
      </form>
    </>
  );
};

export default RapportArrestationView;
