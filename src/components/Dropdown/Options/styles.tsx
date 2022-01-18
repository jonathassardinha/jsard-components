import styled from "styled-components";

export interface OptionsWrapperProps {
  $open: boolean;
}

export const OptionsWrapper = styled.ul<OptionsWrapperProps>`
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
  list-style: none;
  opacity: ${({ $open }) => ($open ? "1" : "0")};
`;

export const OptionWrapper = styled.li`
  padding: 8px;

  &:hover,
  &:focus {
    background-color: #efefef;
  }
`;
