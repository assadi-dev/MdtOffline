import React, { useState } from "react";
import { SpinnerCircularFixed } from "spinners-react";
import { TrashIcon } from "../../../components/SVG";
import { useDispatch } from "react-redux";
import { DeleteBtnAction } from "./Forgotten.styled";
import { deleteForgottenpasswordAsync } from "../../../features/ForgottenPassword/ForgottenPasswordAsyncApi";

const DeleteButton = ({ id }) => {
  const [process, setProcess] = useState(false);
  const dispatch = useDispatch();

  const togleProcess = () => setProcess((current) => (current = !current));

  const handleDelete = () => {
    togleProcess();
    dispatch(deleteForgottenpasswordAsync({ id }))
      .unwrap()
      .finally(() => {
        togleProcess();
      });
  };

  return (
    <DeleteBtnAction
      className="delete"
      onClick={handleDelete}
      title="Supprimer"
    >
      {process ? (
        <SpinnerCircularFixed
          size={20}
          color="#ffffff"
          secondaryColor="#ffffff50"
          speed={350}
        />
      ) : (
        <TrashIcon />
      )}
    </DeleteBtnAction>
  );
};

export default DeleteButton;
