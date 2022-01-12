import { faChevronDown, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconButton from "components/IconButton";
import React, { useState } from "react";

import Options from "./Options";
import {
  Wrapper,
  DropdownWrapper,
  InputWrapper,
  Label,
  CloseButton,
} from "./styles";

export interface DropdownProps {
  label: string;
  placeholder: string;
  options: Array<string>;
}

function Dropdown({ placeholder, label, options }: DropdownProps) {
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
    setOptionsOpen(false);
    console.log(
      event.currentTarget,
      event.relatedTarget,
      event.currentTarget.contains(event.relatedTarget)
    );
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
          <input value={selectedValue} onChange={() => {}} />
          <FontAwesomeIcon className="chevron" icon={faChevronDown} />
          {optionsOpen && (
            <Options options={options} onOptionSelect={setSelectedValue} />
          )}
        </InputWrapper>
        {!!selectedValue && (
          <CloseButton icon={faTimes} onClick={handleDeselect} />
        )}
      </DropdownWrapper>
    </Wrapper>
  );
}

export default Dropdown;
