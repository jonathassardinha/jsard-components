import { KeyboardEvent, MouseEvent, MutableRefObject, useRef } from "react";
import { OptionsWrapper, OptionWrapper } from "./styles";

interface OptionsProps {
  open: boolean;
  options: Array<string>;
  onOptionSelect: Function;
  firstOptionRef?: MutableRefObject<HTMLLIElement | null>;
}

function Options({
  open,
  firstOptionRef,
  options,
  onOptionSelect,
}: OptionsProps) {
  const optionsRef = useRef<{ element: HTMLLIElement; value: string }[]>([]);
  const currentIndex = useRef(0);

  const handleRef = (
    ref: HTMLLIElement | null,
    option: string,
    index: number
  ) => {
    if (index === 0 && firstOptionRef) firstOptionRef.current = ref;
    if (ref) optionsRef.current.push({ element: ref, value: option });
  };

  const selectNewOption = (value: string) => {
    onOptionSelect(value);
    optionsRef.current[currentIndex.current]?.element.blur();
    currentIndex.current = 0;
  };

  const handleClick = (
    event: MouseEvent<HTMLLIElement>,
    option: string,
    index: number
  ) => {
    event.stopPropagation();
    currentIndex.current = index;
    selectNewOption(option);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLLIElement>) => {
    switch (event.code) {
      case "ArrowUp":
        if (currentIndex.current === 0) return;
        currentIndex.current -= 1;
        optionsRef.current[currentIndex.current]?.element.focus();
        break;
      case "ArrowDown":
        if (currentIndex.current === options.length - 1) return;
        currentIndex.current += 1;
        optionsRef.current[currentIndex.current]?.element.focus();
        break;
      case "Tab":
        if (event.shiftKey) {
          if (currentIndex.current === 0) return;
          event.preventDefault();
          currentIndex.current -= 1;
        } else {
          if (currentIndex.current === options.length - 1) {
            currentIndex.current = 0;
            return;
          }
          event.preventDefault();
          currentIndex.current += 1;
        }
        optionsRef.current[currentIndex.current]?.element.focus();
        break;
      case "Enter":
      case "Space":
      case " ":
        selectNewOption(optionsRef.current[currentIndex.current]?.value);
        event.stopPropagation();
        break;
      default:
        break;
    }
  };

  return (
    <OptionsWrapper tabIndex={-1} $open={open}>
      {options.map((option, index) => (
        <OptionWrapper
          ref={(ref) => handleRef(ref, option, index)}
          tabIndex={-1}
          key={option}
          onClick={(event) => handleClick(event, option, index)}
          onKeyDown={handleKeyDown}
        >
          {option}
        </OptionWrapper>
      ))}
    </OptionsWrapper>
  );
}

export default Options;
