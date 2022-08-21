import styled from "styled-components";
import Select from "react-select";

export const CustomSelect = styled(Select)`
  .react-select__placeholder {
    font-weight: 300;
    letter-spacing: 1px;
    font-size: 16px;
    color: rgba(255, 255, 255, 0.5);
    font-style: italic;
  }

  .react-select__input-container {
    color: var(--color-white);
    font-weight: 300;
    letter-spacing: 1px;
    font-size: 16px;
    transition: all 0.35s;
    outline: transparent;
  }
`;
