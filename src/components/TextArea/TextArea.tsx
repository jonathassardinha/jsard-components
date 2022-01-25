import Hover from "components/Hover";
import { ChangeEvent, useState } from "react";
import { StyledTextArea, TextAreaWrapper } from "./styles";

export interface NativeTextAreaProps {
  maxLength?: number;
  minLength?: number;
  rows?: string | number;
  cols?: string | number;
}

export interface TextAreaProps {
  name: string;
  label?: string;
  placeholder?: string;
  value?: string;
  textAreaProps?: NativeTextAreaProps;
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  "aria-label"?: string;
  "aria-labelledby"?: string;
}

function TextArea({
  name,
  value,
  placeholder,
  onChange,
  textAreaProps,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledBy,
}: TextAreaProps) {
  const [focused, setFocused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [textAreaValue, setTextAreaValue] = useState("");

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    if (onChange) onChange(event);
    else setTextAreaValue(event.currentTarget.value);
  };

  console.log(value, textAreaValue, placeholder);

  return (
    <TextAreaWrapper>
      <Hover
        focused={focused}
        hovered={hovered}
        wrapperProps={{
          onMouseEnter: () => setHovered(true),
          onMouseLeave: () => setHovered(false),
        }}
      >
        <StyledTextArea
          {...textAreaProps}
          id={name}
          name={name}
          value={value || textAreaValue}
          placeholder={placeholder}
          onChange={handleChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          aria-label={ariaLabel}
          aria-labelledby={ariaLabelledBy}
        />
      </Hover>
    </TextAreaWrapper>
  );
}

export default TextArea;
