import styled from "styled-components";

export const StyledInput = styled.input`
  padding: 8px;
  border: 1px solid #ccc;

  &:focus-visible {
    outline: none;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  width: fit-content;
  display: flex;
  flex-direction: column;
`;

interface HoverProps {
  hovered?: boolean;
  focused?: boolean;
}

export const HoverWrapper = styled.div`
  width: calc(100%);
  height: calc(100%);
  position: relative;
`;

export const Hover = styled.div<HoverProps>`
  width: calc(100% + 2px);
  height: calc(100% + 2px);
  position: absolute;
  top: -1px;
  left: -1px;
  z-index: -1;

  display: flex;
  justify-content: center;
`;

export const HoverBackground = styled.div<HoverProps>`
  width: 0%;
  background-color: #999;

  transition: all 250ms ease;

  ${({ hovered }) =>
    hovered &&
    `
    width: calc(100%);
    height: calc(100%);
  `}

  ${({ focused }) =>
    focused &&
    `
    width: calc(100%);
    height: calc(100%);
    background-color: #333;
  `}
`;

export const Label = styled.label`
  margin-bottom: 8px;
`;
