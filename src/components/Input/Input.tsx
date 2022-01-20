import { ChangeEvent, useState } from "react";
import {
  Hover,
  HoverBackground,
  HoverWrapper,
  InputWrapper,
  Label,
  StyledInput,
} from "./styles";

export interface NativeInputProps {
  type?: "text" | "number";
  maxLength?: number;
  minLength?: number;
  max?: string | number;
  min?: string | number;
}

export interface InputProps {
  name: string;
  label?: string;
  placeholder?: string;
  value?: string;
  inputProps?: NativeInputProps;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  "aria-label"?: string;
  "aria-labelledby"?: string;
}

function Input({
  name,
  label,
  placeholder,
  value,
  onChange,
  inputProps,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabeledBy,
}: InputProps) {
  const [focused, setFocused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (onChange) onChange(event);
    else setInputValue(event.currentTarget.value);
  };

  return (
    <InputWrapper>
      {label && <Label htmlFor={name}>{label}</Label>}
      <HoverWrapper
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <StyledInput
          {...inputProps}
          id={name}
          name={name}
          value={value || inputValue}
          placeholder={placeholder}
          onChange={handleChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          aria-label={ariaLabel}
          aria-labelledby={ariaLabeledBy}
        />
        <Hover>
          <HoverBackground hovered={hovered} focused={focused} />
        </Hover>
      </HoverWrapper>
    </InputWrapper>
  );
}

export default Input;
