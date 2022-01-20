import styled from "styled-components";

export interface OptionsWrapperProps {
  $open: boolean;
  $optionsWidth?: string;
}

export interface OptionWrapperProps {
  $wrapItemText?: boolean;
}

export const OptionsWrapper = styled.ul<OptionsWrapperProps>`
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  width: ${({ $open, $optionsWidth }) =>
    $open ? $optionsWidth || "fit-content" : "0"};
  overflow: hidden;
  padding-top: 12px;
  padding-bottom: 12px;
  background-color: white;
  z-index: 10;
  box-shadow: 0px 0px 4px gray;
  transition: all 250ms ease;
  list-style: none;
  opacity: ${({ $open }) => ($open ? "1" : "0")};
`;

export const OptionWrapper = styled.li<OptionWrapperProps>`
  padding: 8px;
  white-space: ${({ $wrapItemText }) => ($wrapItemText ? "wrap" : "nowrap")};
  line-break: anywhere;
  text-overflow: ellipsis;
  overflow: hidden;

  &:hover,
  &:focus {
    background-color: #efefef;
  }
`;
