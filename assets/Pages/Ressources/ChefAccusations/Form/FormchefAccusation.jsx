import React from "react";
import {
  FormBodyContainer,
  FormBottomRow,
  FormControl,
  FormLabel,
  SubmitButton,
} from "../ChefAccusation.styled";
import Input from "../../../../components/Shared/Input";
import Select from "../../../../components/Shared/Select";
import { optionSelect } from "../helpers";
import { useFormik } from "formik";

const FormChefAccusation = ({
  labelSubmitButton = "Ajouter",
  defaultValue = null,
  onSave = () => {},
}) => {
  const formik = useFormik({
    initialValues: {
      infraction: "",
      categorie: "Contravention",
      niveau: 1,
      amendes: 0,
      notes: "",
      peines: "0:00:00",
      ...defaultValue,
    },
    onSubmit: (values) => {
      let getLevel = optionSelect.find((cat) => cat.value == values.categorie);

      let data = {
        ...values,
        amendes: Number(values.amendes),
        niveau: getLevel.niveau,
      };

      onSave(data);
    },
  });

  return (
    <FormBodyContainer onSubmit={formik.handleSubmit}>
      <FormLabel htmlFor="infraction">Infraction </FormLabel>
      <FormControl>
        <Input
          required
          inputName={"infraction"}
          onChange={formik.handleChange}
          value={formik.values.infraction}
          placeholder="Nom de l'infraction"
        />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="categorie">Categorie </FormLabel>
        <Select
          inputName={"categorie"}
          value={formik.values.categorie}
          onChange={formik.handleChange}
        >
          {optionSelect.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="notes">Notes </FormLabel>
        <Input
          inputName={"notes"}
          onChange={formik.handleChange}
          value={formik.values.notes}
          placeholder="Notes"
        />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="peines">Peines </FormLabel>
        <Input
          required
          inputName={"peines"}
          onChange={formik.handleChange}
          value={formik.values.peines}
          placeholder="Peine au format HH:MM:SS"
        />
        <small>la peine doit imperativement être au format HH:MM:SS</small>
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="amendes">Amendes </FormLabel>
        <Input
          required
          inputName={"amendes"}
          onChange={formik.handleChange}
          value={formik.values.amendes}
          placeholder="Peine au format HH:MM:SS"
        />
        <small>la peine doit uniquement être au format numérique</small>
      </FormControl>
      <FormBottomRow>
        <SubmitButton>{labelSubmitButton}</SubmitButton>
      </FormBottomRow>
    </FormBodyContainer>
  );
};

export default FormChefAccusation;
