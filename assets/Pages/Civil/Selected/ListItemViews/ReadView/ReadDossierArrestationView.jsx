import numeral from "numeral";
import React, { useRef, useState, useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { codePenal, nominal } from "../../../../../Data/FichesCalcule";
import useFecthData from "../../../../../hooks/useFecthData";
import { edit_dossierArrestation } from "../../../../../redux/actions/DossierArrestation.action";

import {
  conversionUP,
  findChefAccusationByName,
  TimeToUnix,
  unixToTime,
} from "../../../../../utils/calculs";
import ButtonDefault from "../../../../../components/Shared/Buttons/ButtonDefault";
import InputTextArea from "../../../../../components/Shared/InputTextArea";
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

const ReadDossierArrestationView = ({ id, onClose }) => {
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
  const { data, loading } = useFecthData(`/arrest_folders/${id}`);
  const fetchInfractions = useFecthData("/chef_accusations");

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

  const options = !fetchInfractions.loading
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
            DOSSIER D'ARRESTATION N°{numeroFormat.format("000")}{" "}
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
                      value={inputState.lieux}
                      readOnly={true}
                    />
                  </td>
                  <td>
                    <input
                      type="time"
                      name="entreeCellule"
                      className="entreCellule"
                      value={inputState.entreeCellule}
                      readOnly={true}
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
                      disabled
                    />
                  </td>
                  <td>
                    <SwitchButton
                      name="soins"
                      checked={inputState.soins}
                      disabled
                    />
                  </td>
                  <td>
                    <SwitchButton
                      name="nourriture"
                      checked={inputState.nourriture}
                      disabled
                    />
                  </td>
                  <td>
                    <SwitchButton
                      name="avocat"
                      checked={inputState.avocat}
                      disabled
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
            value={inputState.chefAcusation}
            isDisabled={true}
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
                      sliderOffColor={"var(--color-blue-dark)"}
                      checked={chef.tentative != 1 ? true : false}
                      disabled
                    />
                  </td>
                  <td>
                    {" "}
                    <SwitchButton
                      name={chef.label}
                      sliderOffColor={"var(--color-blue-dark)"}
                      checked={chef.complicite != 1 ? true : false}
                      disabled
                    />
                  </td>
                  <td className="td-center">
                    <input
                      type="number"
                      name={chef.label}
                      value={chef ? chef.qte : 0}
                      min={1}
                      readOnly
                    />
                  </td>
                  <td>
                    <select
                      defaultValue={chef ? chef.nominal : 1}
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
              <p className="label">Amende</p> <p className="mount">{total} $</p>{" "}
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
            value={inputState.rapport}
            readOnly={true}
          />
        </div>
        <FooterSectionButton>
          <ButtonDefault className="btn">Fermer</ButtonDefault>
        </FooterSectionButton>
      </form>
    </>
  );
};

export default ReadDossierArrestationView;
