import React, { useRef } from "react";
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
    let textInput = textAreaRef.current.querySelector("textarea");
    textInput.removeAttribute("style");
  };
  const options = codePenal
    .filter((j) => j.categorie == "Contravention")
    .map((j) => {
      return {
        label: j.infraction,
        value: j.amende,
      };
    });

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
          />
        </div>
        <div className="form-control" ref={textAreaRef}>
          <SelectMultiple
            classNamePrefix="react-select"
            isMulti
            options={options}
            placeholder="Choisissez un chef d'acusation"
            noOptionsMessage={() => null}
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
              <tr>
                <td>dddd</td>
                <td>ddd</td>
                <td>
                  {" "}
                  <input type="number" value={0} />
                </td>
                <td>
                  <select value={1}>
                    {nominal.map((n) => (
                      <option value={n.value}>{n.label}</option>
                    ))}
                  </select>
                </td>
              </tr>
            </tbody>
          </EditTable>
        </div>
        <div className="form-control">
          <BorderZone>
            {" "}
            <p className="label">Ammende</p> <p className="mount">0</p>{" "}
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
