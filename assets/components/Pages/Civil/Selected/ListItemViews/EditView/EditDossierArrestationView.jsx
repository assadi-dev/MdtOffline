import numeral from "numeral";
import React, { useRef, useState, useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { codePenal, nominal } from "../../../../../../Data/FichesCalcule";
import useFecthData from "../../../../../../hooks/useFecthData";
import { edit_dossierArrestation } from "../../../../../../redux/actions/DossierArrestation.action";

import {
  conversionUP,
  TimeToUnix,
  unixToTime,
} from "../../../../../../utils/calculs";
import ButtonDefault from "../../../../../Shared/Buttons/ButtonDefault";
import InputTextArea from "../../../../../Shared/InputTextArea";
import CloseModalBtn from "../../../../../Shared/Modal/CloseModal";
import SelectMultiple from "../../../../../Shared/SelectMultiple";
import SwitchButton from "../../../../../Shared/SwitchButton";
import EditTable from "../../EditTable";
import {
  BorderZone,
  FooterSectionButton,
  HeadTitleView,
  TableViewPresentation,
} from "../../ModalView/ModalView.styled";

const EditDossierArrestationView = ({ id, onClose }) => {
  let numeroFormat = numeral(id);

  const textAreaRef = useRef();
  const closeModal = () => {
    onClose();
    let textInput = textAreaRef.current.querySelector("textarea");
    textInput.hasAttribute("style") ? textInput.removeAttribute("style") : null;
  };

  const dispatch = useDispatch();
  const agent = useSelector((state) => state.AuthenticateReducer);
  const token = agent.token;
  const { data, loading } = useFecthData(`/arrest_folders/${id}`, token);

  const [inputState, setInputState] = useState({
    lieux: "",
    entreeCellule: "",
    chefAcusation: [],
    droitMiranda: false,
    soins: false,
    nourriture: false,
    avocat: false,
    isEnclose: false,
    rapport: "",
  });

  useEffect(() => {
    const {
      infractions,
      lieux,
      entreeCellule,
      droitMiranda,
      soins,
      nourriture,
      avocat,
      rapport,
      isEnclose,
    } = data;
    console.log(data);
    infractions &&
      setInputState((prevState) => ({
        ...prevState,
        lieux,
        entreeCellule,
        droitMiranda,
        soins,
        nourriture,
        avocat,
        rapport,
        isEnclose,
        chefAcusation: infractions,
      }));
  }, [loading]);

  const options = codePenal.map((j) => {
    return {
      label: j.infraction,
      value: j.amende,
      peine: j.peines,
      tentative: 1,
      complicite: 1,
      nominal: 1,
      qte: 1,
    };
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
    if (inputState.chefAcusation.length > 0) {
      setInputState((prevState) => ({
        ...prevState,
        chefAcusation: prevState.chefAcusation.map((cf) => {
          {
            if (cf.label == name) {
              return { ...cf, qte: parseInt(value) };
            }
          }
          return cf;
        }),
      }));
    }
  };

  const handleNominal = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (inputState.chefAcusation.length > 0) {
      setInputState((prevState) => ({
        ...prevState,
        chefAcusation: prevState.chefAcusation.map((cf) => {
          {
            if (cf.label == name) {
              return { ...cf, nominal: parseFloat(value) };
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

    if (inputState.chefAcusation.length > 0) {
      setInputState((prevState) => ({
        ...prevState,
        chefAcusation: prevState.chefAcusation.map((cf) => {
          {
            if (cf.label == name) {
              return { ...cf, tentative: value ? 0.25 : 1 };
            }
          }
          return cf;
        }),
      }));
    }
  };

  const handleComplicite = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    let checked = e.target.checked;
    if (inputState.chefAcusation.length > 0) {
      setInputState((prevState) => ({
        ...prevState,
        chefAcusation: prevState.chefAcusation.map((cf) => {
          {
            if (cf.label == name) {
              return { ...cf, complicite: checked ? 0.6 : 1 };
            }
          }
          return cf;
        }),
      }));
    }
  };

  const handleSwitch = (e) => {
    let name = e.target.name,
      value = e.target.checked;

    setInputState((prevState) => ({ ...prevState, [name]: value }));
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
      // agent: `${agent.matricule}-${agent.username}`,
      // civil: `api/civils/${idCivil}`,
      infractions,
      lieux: inputState.lieux,
      entreeCellule: inputState.entreeCellule,
      amend: total,
      peine: totalUp,
      droitMiranda: inputState.droitMiranda,
      soins: inputState.soins,
      nourriture: inputState.nourriture,
      isEnclose: inputState.isEnclose,
      avocat: inputState.avocat,
      rapport: inputState.rapport,
    };

    token &&
      dispatch(edit_dossierArrestation(id, data, token)).then(() => {
        onClose();
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <HeadTitleView>
          <h2 className="titleView">
            EDITER LE DOSSIER D'ARRESTATION N°{numeroFormat.format("000")}{" "}
          </h2>
          <CloseModalBtn className="closeBtn" onClick={closeModal} />
        </HeadTitleView>

        <div className="form-control">
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
                  <td>Lieux de remplissage</td>
                  <td>Entrée cellule</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="lieuxRemplissage">
                    <input
                      type="text"
                      name="lieux"
                      autoFocus
                      onChange={handleChangeValue}
                      value={inputState.lieux}
                    />
                  </td>
                  <td>
                    <input
                      type="time"
                      name="entreeCellule"
                      className="entreCellule"
                      onChange={handleChangeValue}
                      value={inputState.entreeCellule}
                    />
                  </td>
                </tr>
              </tbody>
            </TableViewPresentation>
          </BorderZone>
        </div>

        <div>
          <BorderZone
            style={{
              height: "auto",
              flexDirection: "row",
              justifyContent: "space-evenly",
              marginBottom: "2rem",
            }}
          >
            <TableViewPresentation>
              <thead>
                <tr>
                  <th>Droit Miranda</th>
                  <th>Soins</th>
                  <th>Nouriture</th>
                  <th>Avocat</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <SwitchButton
                      name="droitMiranda"
                      checked={inputState.droitMiranda}
                      onChange={handleSwitch}
                    />
                  </td>
                  <td>
                    <SwitchButton
                      name="soins"
                      checked={inputState.soins}
                      onChange={handleSwitch}
                    />
                  </td>
                  <td>
                    <SwitchButton
                      name="nourriture"
                      checked={inputState.nourriture}
                      onChange={handleSwitch}
                    />
                  </td>
                  <td>
                    <SwitchButton
                      name="avocat"
                      checked={inputState.avocat}
                      onChange={handleSwitch}
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
                      name={chef.label}
                      onChange={handleTentative}
                      sliderOffColor={"var(--color-blue-dark)"}
                      checked={chef.tentative != 1 ? true : false}
                    />
                  </td>
                  <td>
                    {" "}
                    <SwitchButton
                      name={chef.label}
                      onChange={handleComplicite}
                      sliderOffColor={"var(--color-blue-dark)"}
                      checked={chef.complicite != 1 ? true : false}
                    />
                  </td>
                  <td className="td-center">
                    <input
                      type="number"
                      name={chef.label}
                      value={chef ? chef.qte : 0}
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
                  <td> {chef.peine} </td>
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
              <p className="label">Ammende</p>{" "}
              <p className="mount">{total} $</p>{" "}
            </div>
            <div style={{ textAlign: "center" }}>
              {" "}
              <p className="label">UP</p> <p className="mount">{totalUp}</p>{" "}
            </div>
          </BorderZone>
        </div>
        <div className="form-control" ref={textAreaRef}>
          <InputTextArea
            rows={3}
            placeholder="Ecrivez le rapport"
            name="rapport"
            onChange={handleChangeValue}
            value={inputState.rapport}
          />
        </div>
        <FooterSectionButton>
          <ButtonDefault className="btn">Envoyer</ButtonDefault>
        </FooterSectionButton>
      </form>
    </>
  );
};

export default EditDossierArrestationView;
