import styled from "styled-components";

const Iconsize = 20;

export const SuccessContainer = styled.div`
  margin-top: 1rem;
  position: relative;
  color: #0f5132;
  background-color: #d1e7dd;
  border-color: #badbcc;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 3px 8px;
`;

export const ErrorContainer = styled.div`
  margin-top: 1rem;
  position: relative;
  color: #842029;
  background-color: #f8d7da;
  border-color: #f5c2c7;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 3px 8px;
`;

export const RowAlert = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const IconAlert = styled.span`
  width: ${Iconsize}px;
  height: ${Iconsize}px;
  margin-right: 0.3rem;
  & svg {
    width: ${Iconsize}px;
    height: ${Iconsize}px;
  }
`;

export const CodeAlert = styled.span`
  font-weight: 600;
  margin-right: 0.3rem;
  white-space: nowrap;
`;
