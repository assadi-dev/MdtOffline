import React, { useEffect, useMemo, useRef, useState } from "react";
import Select, { createFilter, StylesConfig } from "react-select";

import { codePenal, nominal } from "../../../../../Data/FichesCalcule";
import { useDispatch, useSelector } from "react-redux";
import useFecthData from "../../../../../hooks/useFecthData";
import {
  BorderZone,
  FooterSectionButton,
  HeadTitleView,
} from "../../ModalView/ModalView.styled";
import CloseModalBtn from "../../../../../components/Shared/Modal/CloseModal";
import InputTextArea from "../../../../../components/Shared/InputTextArea";
import SelectMultiple from "../../../../../components/Shared/SelectMultiple";
import EditTable from "../../EditTable";
import ButtonDefault from "../../../../../components/Shared/Buttons/ButtonDefault";
import numeral from "numeral";
import { edit_traffic } from "../../../../../redux/actions/Traffic.action";
import useFecthDataWithParams from "../../../../../hooks/useFecthDataWithParams";

const EditTrafficView = ({ id, onClose }) => {
  let numeroFormat = numeral(id);
  const textAreaRef = useRef();
  const dispatch = useDispatch();
  const agent = useSelector((state) => state.AuthenticateReducer);
  const token = agent.token;
  const fetchContravention = useFecthDataWithParams("chef_accusations", {
    categorie: "Contravention",
  });

  const closeModal = () => {
    onClose();
  };
  const options = fetchContravention.data.map((j) => {
    return {
      label: j.infraction,
      value: j.amendes,
      peine: j.peines,
      nominal: 1,
      qte: 1,
    };
  });

  const [inputState, setInputState] = useState({
    lieuxRemplissage: "",
    chefAcusation: [],
  });
  const { data } = useFecthData(`/traffic/${id}`);

  useEffect(() => {
    const { infractions, lieux } = data;
    infractions &&
      setInputState((prevState) => ({
        ...prevState,
        lieuxRemplissage: lieux,
        chefAcusation: infractions,
      }));
  }, [data]);

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
      let somme = sommeChefAccusation.reduce((a, b) => a + b);
      return somme.toFixed(2);
    }
    return 0;
  }, [inputState.chefAcusation]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const infractions = inputState.chefAcusation;

    let data = {
      infractions,
      lieux: inputState.lieuxRemplissage,
      amend: total,
      //agent: `${agent.matricule}-${agent.username}`,
      // civil: `api/civils/${idCivil}`,
    };

    token &&
      dispatch(edit_traffic(id, data)).then(() => {
        onClose();
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <HeadTitleView>
          <h2 className="titleView">
            EDITER LE TRAFFIC N°{numeroFormat.format("000")}
          </h2>
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

export default EditTrafficView;
