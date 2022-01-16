import styled from "styled-components";

export const ButtonWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  height: 32px;
  width: 32px;
  background: transparent;
  cursor: pointer;

  transition: all 250ms ease;

  &:hover {
    background: #eee;
  }

  &:active {
    background: #ccc;
  }
`;
