import { useFormik } from "formik";
import React from "react";
import {
  FormBodyContainer,
  FormBottomRow,
  FormControl,
  FormLabel,
  SubmitButton,
} from "../../Service.styled";
import Select from "../../../../components/Shared/Select";
import Input from "../../../../components/Shared/Input";
import InputTextArea from "../../../../components/Shared/InputTextArea";
import { useDispatch } from "react-redux";
import { editPlaintesAsync } from "../../../../features/Plaintes/PlaintesAsyncApi";

const EditForm = ({ plainteData, onClose }) => {
  const dispatch = useDispatch();
  const {
    id,
    nomDepositaire,
    telephoneDepositaire,
    nomIncrimine,
    telephoneIncrimine,
    raisonDepot,
    corpsPlainte,
  } = plainteData;

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      nomDepositaire: nomDepositaire ? nomDepositaire : "",
      telephoneDepositaire: telephoneDepositaire ? telephoneDepositaire : "",
      nomIncrimine: nomIncrimine ? nomIncrimine : "",
      telephoneIncrimine: telephoneIncrimine ? telephoneIncrimine : "",
      raisonDepot: raisonDepot ? raisonDepot : "",
      corpsPlainte: corpsPlainte ? corpsPlainte : "",
    },
    onSubmit: (values) => {
      const payload = { id, data: values };
      dispatch(editPlaintesAsync(payload))
        .unwrap()
        .then(() => {
          onClose();
        });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <FormBodyContainer>
        <FormControl>
          <FormLabel>Dépositaire:</FormLabel>
          <Input
            inputName={"nomDepositaire"}
            placeholder="Prénom nom"
            onChange={formik.handleChange}
            value={formik.values.nomDepositaire}
          />
        </FormControl>

        <FormControl>
          <FormLabel>Numéro du dépositaire:</FormLabel>
          <Input
            inputName={"telephoneDepositaire"}
            placeholder="Numéro du dépositaire ex: 555-XXXXX"
            onChange={formik.handleChange}
            value={formik.values.telephoneDepositaire}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Incriminé:</FormLabel>
          <Input
            inputName={"nomIncrimine"}
            placeholder="Prénom nom"
            onChange={formik.handleChange}
            value={formik.values.nomIncrimine}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Numéro de l'Incriminé:</FormLabel>
          <Input
            inputName={"telephoneIncrimine"}
            placeholder="Numéro de l'Incriminé ex: 555-XXXXX"
            onChange={formik.handleChange}
            value={formik.values.telephoneIncrimine}
          />
        </FormControl>

        <FormControl>
          <FormLabel>Raison du dépot:</FormLabel>
          <InputTextArea
            rows={3}
            placeholder="Raison du dépot"
            name="raisonDepot"
            value={formik.values.raisonDepot}
            onChange={formik.handleChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Corps de la plainte:</FormLabel>
          <InputTextArea
            rows={4}
            placeholder="Corps de la plainte"
            name="corpsPlainte"
            value={formik.values.corpsPlainte}
            onChange={formik.handleChange}
          />
        </FormControl>

        <FormBottomRow>
          <SubmitButton>Modifier</SubmitButton>
        </FormBottomRow>
      </FormBodyContainer>
    </form>
  );
};

export default EditForm;
