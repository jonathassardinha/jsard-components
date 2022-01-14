import { faChevronDown, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

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
}

function Dropdown({ name, placeholder, label, options }: DropdownProps) {
  const [optionsOpen, setOptionsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string>("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Escape") setOptionsOpen(false);
    else if (e.key === "Enter") setOptionsOpen((state) => !state);
    else if (e.key === " " || e.key === "Spacebar") {
      setOptionsOpen((state) => !state);
    }
    console.log(e.key);
  };

  const handleBlur = (event: React.FocusEvent) => {
    if (!event.currentTarget.contains(event.relatedTarget))
      setOptionsOpen(false);
  };

  const handleClick = () => {
    setOptionsOpen((state) => !state);
  };

  const handleDeselect = () => {
    setSelectedValue("");
  };

  return (
    <Wrapper>
      <Label id="input-wrapper">{label}</Label>
      <DropdownWrapper>
        <InputWrapper
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
          <input value={selectedValue} onChange={() => {}} name={name} />
          <FontAwesomeIcon
            className={`chevron ${optionsOpen && "open"}`}
            icon={faChevronDown}
          />
          {optionsOpen && (
            <Options options={options} onOptionSelect={setSelectedValue} />
          )}
        </InputWrapper>
        {!!selectedValue && (
          <ResetButton icon={faTimes} onClick={handleDeselect} />
        )}
      </DropdownWrapper>
    </Wrapper>
  );
}

export default Dropdown;
