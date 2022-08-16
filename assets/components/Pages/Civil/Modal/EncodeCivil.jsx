import React from "react";
import Input from "../../../Shared/Input";
import Modal from "../../../Shared/Modal";
import Select from "../../../Shared/select";
import {
  FormContainer,
  HeaderModal,
  InputContainer,
} from "./EncodeCivile.styled";

const EncodeCivil = ({ isOpen, onClose }) => {
  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <FormContainer>
          <HeaderModal>
            <h2 className="formTitle">Encoder un civil</h2>
          </HeaderModal>
          <InputContainer>
            <div>
              <Input />
              <Select>
                <option value="ee">test</option>
              </Select>
            </div>
          </InputContainer>
        </FormContainer>
      </Modal>
    </div>
  );
};

export default EncodeCivil;
