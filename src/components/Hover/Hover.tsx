import { ReactNode } from "react";
import { StyledComponentPropsWithRef } from "styled-components";
import { HoverBackground, HoverWrapper, Wrapper } from "./styles";

export interface HoverProps {
  children: ReactNode;
  hovered?: boolean;
  focused?: boolean;
  wrapperProps?: StyledComponentPropsWithRef<"div">;
}

function Hover({ children, hovered, focused, wrapperProps }: HoverProps) {
  return (
    <Wrapper {...wrapperProps}>
      {children}
      <HoverWrapper>
        <HoverBackground $hovered={hovered} $focused={focused} />
      </HoverWrapper>
    </Wrapper>
  );
}

export default Hover;
