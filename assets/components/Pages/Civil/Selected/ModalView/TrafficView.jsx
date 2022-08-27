import React, { useMemo, useRef, useState } from "react";
import ButtonDefault from "../../../../Shared/Buttons/ButtonDefault";
import Input from "../../../../Shared/Input";
import InputTextArea from "../../../../Shared/InputTextArea";
import CloseModalBtn from "../../../../Shared/Modal/CloseModal";
import Select, { createFilter, StylesConfig } from "react-select";
import {
  BorderZone,
  FooterSectionButton,
  HeadTitleView,
} from "./ModalView.styled";
import SelectMultiple from "../../../../Shared/SelectMultiple";
import { codePenal, nominal } from "../../../../../Data/FichesCalcule";
import EditTable from "../EditTable";

const TrafficView = ({ onClose }) => {
  const textAreaRef = useRef();
  const closeModal = () => {
    onClose();
  };
  const options = codePenal
    .filter((j) => j.categorie == "Contravention")
    .map((j) => {
      return {
        label: j.infraction,
        value: j.amende,
        peine: j.peine,
      };
    });

  const [inputState, setInputState] = useState({
    lieuxRemplissage: "",
    chefAcusation: [],
    amende: 0,
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

  const total = useMemo(() => {
    if (inputState.chefAcusation.length > 0) {
      let sommeChefAccusation = inputState.chefAcusation.map(
        (c) => c.value * c.qte * c.nominal
      );
      return sommeChefAccusation.reduce((a, b) => a + b);
    }
    return 0;
  }, [inputState.chefAcusation]);

  return (
    <>
      <form action="">
        <HeadTitleView>
          <h2 className="titleView">TRAFFIC</h2>
          <CloseModalBtn className="closeBtn" onClick={closeModal} />
        </HeadTitleView>
        <div className="form-control" ref={textAreaRef}>
          <InputTextArea
            style={{ resize: "none" }}
            rows={3}
            placeholder="Lieux de remplissage"
            name="lieuxRemplissage"
            onChange={handleChangeValue}
            value={inputState.lieuxRemplissage}
          />
        </div>
        <div className="form-control" ref={textAreaRef}>
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
                <th>infos suplementaires</th>
                <th>quantité</th>
                <th>amende</th>
              </tr>
            </thead>
            <tbody>
              {inputState.chefAcusation.map((chef, i) => (
                <tr key={i}>
                  <td>{chef.label}</td>
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
                </tr>
              ))}
            </tbody>
          </EditTable>
        </div>
        <div className="form-control">
          <BorderZone>
            {" "}
            <p className="label">Ammende</p> <p className="mount">{total}</p>{" "}
          </BorderZone>
        </div>
        <FooterSectionButton>
          <ButtonDefault className="btn">Envoyer</ButtonDefault>
        </FooterSectionButton>
      </form>
    </>
  );
};

export default TrafficView;
