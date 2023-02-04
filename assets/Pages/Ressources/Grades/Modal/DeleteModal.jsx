import React from "react";
import { useDispatch } from "react-redux";
import ButtonDefault from "../../../../components/Shared/Buttons/ButtonDefault";
import { CloseModal } from "../Grade.styled";
import {
  BodyDeleteContent,
  DeleteHeadTitleView,
  DeleteSectionbutton,
  DeleteView,
} from "./Delete.styled";
import { deleteGradeAsync } from "../../../../features/Grades/GradeAsyncApi";

const DeleteModal = ({ id, name, onClose }) => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(deleteGradeAsync({ id })).then(() => onClose());
  };

  return (
    <DeleteView>
      <form onSubmit={handleSubmit}>
        <DeleteHeadTitleView>
          <CloseModal className="closeBtn" onClick={onClose} />
        </DeleteHeadTitleView>
        <BodyDeleteContent>
          <p>
            Voulez vous supprimez le grade <span> {name} </span> ?
          </p>
        </BodyDeleteContent>

        <DeleteSectionbutton>
          <div className="col-validate">
            {" "}
            <ButtonDefault type="submit" className="btn">
              CONFIRMER
            </ButtonDefault>{" "}
          </div>
          <div className="col-cancel">
            {" "}
            <ButtonDefault type="button" className="btn" onClick={onClose}>
              ANNULER
            </ButtonDefault>
          </div>
        </DeleteSectionbutton>
      </form>
    </DeleteView>
  );
};

export default DeleteModal;
