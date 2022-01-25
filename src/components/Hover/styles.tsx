import styled from "styled-components";

interface HoverStylesProps {
  $hovered?: boolean;
  $focused?: boolean;
}

interface HoverWrapperProps extends HoverStylesProps {
  $borderWidth?: string;
}

interface HoverBackgroundProps extends HoverStylesProps {
  $borderHoverColor?: string;
  $borderSelectedColor?: string;
}

export const Wrapper = styled.div`
  width: calc(100%);
  height: calc(100%);
  position: relative;
  display: flex;
`;

export const HoverWrapper = styled.div<HoverWrapperProps>`
  width: ${({ $borderWidth = "2px" }) => `calc(100% + ${$borderWidth})`};
  height: ${({ $borderWidth = "2px" }) => `calc(100% + ${$borderWidth})`};
  position: absolute;
  top: -1px;
  left: -1px;
  z-index: -1;

  display: flex;
  justify-content: center;
`;

export const HoverBackground = styled.div<HoverBackgroundProps>`
  width: 0%;
  background-color: ${({ $borderHoverColor = "#999" }) => $borderHoverColor};

  transition: all 250ms ease;

  ${({ $hovered }) =>
    $hovered &&
    `
      width: calc(100%);
      height: calc(100%);
    `}

  ${({ $focused, $borderSelectedColor = "#333" }) =>
    $focused &&
    `
      width: calc(100%);
      height: calc(100%);
      background-color: ${$borderSelectedColor};
    `}
`;
