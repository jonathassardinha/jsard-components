import Hover from "components/Hover";
import { ChangeEvent, HTMLInputTypeAttribute, useState } from "react";
import { InputWrapper, Label, StyledInput } from "./styles";

export interface NativeInputProps {
  type?: HTMLInputTypeAttribute;
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
  "aria-labelledby": ariaLabelledBy,
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
      <Hover
        focused={focused}
        hovered={hovered}
        wrapperProps={{
          onMouseEnter: () => setHovered(true),
          onMouseLeave: () => setHovered(false),
        }}
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
          aria-labelledby={ariaLabelledBy}
        />
      </Hover>
    </InputWrapper>
  );
}

export default Input;
