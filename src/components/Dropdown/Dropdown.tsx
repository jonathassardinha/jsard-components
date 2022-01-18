import { faChevronDown, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { MouseEvent, useRef, useState } from "react";

import Options from "./Options";
import {
  Wrapper,
  DropdownWrapper,
  InputWrapper,
  Label,
  ResetButton,
} from "./styles";

export interface DropdownProps {
  name: string;
  label: string;
  placeholder: string;
  options: Array<string>;
  required?: boolean;
}

function Dropdown({
  name,
  placeholder,
  label,
  options,
  required,
}: DropdownProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const optionsRef = useRef<HTMLLIElement>(null);
  const [optionsOpen, setOptionsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string>("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Escape") setOptionsOpen(false);
    else if (e.key === "Enter") {
      setOptionsOpen((state) => !state);
      if (!optionsOpen) optionsRef.current?.focus();
    } else if (e.key === " " || e.key === "Spacebar") {
      setOptionsOpen((state) => !state);
      if (!optionsOpen) optionsRef.current?.focus();
    }
  };

  const handleBlur = (event: React.FocusEvent) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setOptionsOpen(false);
    }
  };

  const handleInputFocus = () => {
    setOptionsOpen(true);
    optionsRef.current?.focus();
  };

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    setOptionsOpen((state) => !state);
    if (!optionsOpen && !(event.target instanceof HTMLLIElement))
      optionsRef.current?.focus();
  };

  const handleDeselect = () => {
    setSelectedValue("");
  };

  return (
    <Wrapper>
      <Label id="input-wrapper" $required={required}>
        {label}
      </Label>
      <DropdownWrapper tabIndex={-1}>
        <InputWrapper
          ref={wrapperRef}
          onClick={handleClick}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          open={optionsOpen}
          tabIndex={0}
          aria-labelledby="input-wrapper"
        >
          <span
            className={`dropdown-${selectedValue ? "value" : "placeholder"}`}
          >
            {selectedValue ? selectedValue : placeholder}
          </span>
          <input
            required={required}
            value={selectedValue}
            onChange={() => {}}
            onFocus={handleInputFocus}
            name={name}
            tabIndex={-1}
          />
          <FontAwesomeIcon
            className={`chevron ${optionsOpen && "open"}`}
            icon={faChevronDown}
          />
          <Options
            open={optionsOpen}
            firstOptionRef={optionsRef}
            options={options}
            onOptionSelect={setSelectedValue}
          />
        </InputWrapper>
        {!!selectedValue && (
          <ResetButton icon={faTimes} onClick={handleDeselect} />
        )}
      </DropdownWrapper>
    </Wrapper>
  );
}

export default Dropdown;
