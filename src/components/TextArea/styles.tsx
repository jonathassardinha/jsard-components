import styled from "styled-components";

export const TextAreaWrapper = styled.div`
  position: relative;
  width: fit-content;
  display: flex;
  flex-direction: column;
`;
export const StyledTextArea = styled.textarea`
  padding: 8px;
  border: 1px solid #ccc;

  &:focus-visible {
    outline: none;
  }
`;
