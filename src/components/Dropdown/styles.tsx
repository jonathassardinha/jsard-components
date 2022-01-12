import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconButton from "components/IconButton";
import styled from "styled-components";

interface WrapperProps {
  open: boolean;
  name?: string;
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DropdownWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const InputWrapper = styled.div<WrapperProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  border: 1px solid ${({ open }) => (open ? "black" : "lightgray")};
  border-radius: 8px;
  cursor: pointer;
  transition: all 250ms ease;
  width: fit-content;

  .dropdown-placeholder {
    color: #888;
  }

  input {
    display: none;
  }

  svg {
    font-size: 0.8rem;
  }

  .chevron {
    margin-left: 8px;
    transition: all 150ms ease;
    transform: ${({ open }) => (open ? "rotate(180deg)" : "rotate(0deg)")};
  }

  &:hover {
    border: 1px solid ${({ open }) => (open ? "black" : "gray")};
  }
`;

export const Label = styled.label`
  margin-bottom: 8px;
`;

export const CloseButton = styled(IconButton)`
  margin-left: 8px;
`;
