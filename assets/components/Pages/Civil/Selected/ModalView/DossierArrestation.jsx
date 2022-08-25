import React, { useRef, useState, useMemo } from "react";
import { codePenal, nominal } from "../../../../../Data/FichesCalcule";
import ButtonDefault from "../../../../Shared/Buttons/ButtonDefault";
import InputTextArea from "../../../../Shared/InputTextArea";
import CloseModalBtn from "../../../../Shared/Modal/CloseModal";
import SelectMultiple from "../../../../Shared/SelectMultiple";
import SwitchButton from "../../../../Shared/SwitchButton";
import EditTable from "../EditTable";
import {
  BorderZone,
  FooterSectionButton,
  HeadTitleView,
  TableViewPresentation,
} from "./ModalView.styled";

const DossierArrestation = ({ onClose }) => {
  const textAreaRef = useRef();
  const closeModal = () => {
    onClose();
    let textInput = textAreaRef.current.querySelector("textarea");
    textInput.removeAttribute("style");
  };

  const [inputState, setInputState] = useState({
    lieuxRemplissage: "",
    chefAcusation: [],
    up: false,
  });

  const options = codePenal.map((j) => {
    return {
      label: j.infraction,
      value: j.amende,
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
      chefAcusation: select.map((s) => ({ ...s, qte: 1, nominal: 1 })),
    }));
  };

  const handleQty = (e) => {
    let name = e.target.name;
    let value = e.target.value;
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
              return { ...cf, nominal: value };
            }
          }
          return cf;
        }),
      }));
    }
  };

  const handleTantative = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (inputState.chefAcusation.length > 0) {
      setInputState((prevState) => ({
        ...prevState,
        chefAcusation: prevState.chefAcusation.map((cf) => {
          {
            if (cf.label == name) {
              return { ...cf, tentative: value };
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
    if (inputState.chefAcusation.length > 0) {
      setInputState((prevState) => ({
        ...prevState,
        chefAcusation: prevState.chefAcusation.map((cf) => {
          {
            if (cf.label == name) {
              return { ...cf, complicité: value };
            }
          }
          return cf;
        }),
      }));
    }
  };

  const total = useMemo(() => {
    if (inputState.chefAcusation.length > 0) {
      let sommeChefAccusation = inputState.chefAcusation.map(
        (c) => c.value * c.qte * c.nominal * c.tentative * c.complicité
      );
      return sommeChefAccusation.reduce((a, b) => a + b);
    }
    return 0;
  }, [inputState.chefAcusation]);

  const totalUp = useMemo(() => {
    if (inputState.up) {
      return conversionUP(total, 0.25);
    }
    return 0;
  }, [total, inputState.chefAcusation, inputState.up]);

  return (
    <>
      <form action="">
        <HeadTitleView>
          <h2 className="titleView">DOSSIER D'ARRESTATION</h2>
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
                <td>Lieux de remplissage</td>
                <td>Entrée cellule</td>
              </thead>
              <tbody>
                <td className="lieuxRemplissage">
                  <input type="text" name="lieuxRemplissage" autoFocus />
                </td>
                <td>
                  <input
                    type="time"
                    name="entreCellule"
                    className="entreCellule"
                  />
                </td>
              </tbody>
            </TableViewPresentation>
          </BorderZone>
        </div>

        <div className="form-control" ref={textAreaRef}>
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
                <td>Droit Miranda</td>
                <td>Soins</td>
                <td>Nouriture</td>
                <td>Avocat</td>
              </thead>
              <tbody>
                <td>
                  {" "}
                  <SwitchButton />
                </td>
                <td>
                  {" "}
                  <SwitchButton />
                </td>
                <td>
                  {" "}
                  <SwitchButton />
                </td>
                <td>
                  {" "}
                  <SwitchButton />
                </td>
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
                  {" "}
                  <td>{chef.label}</td>
                  <td></td>
                  <td className="td-center">
                    <input
                      type="number"
                      name={chef.tentative}
                      value={chef ? chef.tentative : 1}
                      onChange={handleTantative}
                      defaultValue={1}
                    />
                  </td>
                  <td></td>
                  <td className="td-center">
                    <input
                      type="number"
                      name={chef.label}
                      value={chef ? chef.qte : 0}
                      onChange={handleQty}
                      defaultValue={0}
                    />
                  </td>
                  <td>
                    <select
                      value={chef ? chef.nominal : 1}
                      name={chef.label}
                      onChange={handleNominal}
                    >
                      {nominal.map((n) => (
                        <option value={n.value}>{n.label}</option>
                      ))}
                    </select>
                  </td>
                  <td></td>
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
              <p className="label">Ammende</p> <p className="mount">{total}</p>{" "}
            </div>
            <div style={{ textAlign: "center" }}>
              {" "}
              <p className="label">UP</p> <p className="mount">{totalUp}</p>{" "}
            </div>
          </BorderZone>
        </div>
        <div className="form-control" ref={textAreaRef}>
          <InputTextArea rows={3} placeholder="Ecrivez le rapport" />
        </div>
        <FooterSectionButton>
          <ButtonDefault className="btn">Envoyer</ButtonDefault>
        </FooterSectionButton>
      </form>
    </>
  );
};

export default DossierArrestation;
