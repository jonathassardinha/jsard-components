import styled from "styled-components";

export const OptionsWrapper = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  width: calc(100%);
  padding-top: 12px;
  padding-bottom: 12px;
  background-color: white;
  z-index: 10;
  box-shadow: 0px 0px 4px gray;
  transition: all 250ms ease;
`;

export const OptionWrapper = styled.div`
  padding: 8px;

  &:hover,
  &:focus {
    background-color: #efefef;
  }
`;
