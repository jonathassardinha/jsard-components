import { KeyboardEvent, MutableRefObject, useRef } from "react";
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
  const optionsRef = useRef<HTMLLIElement[]>([]);
  const currentIndex = useRef(0);

  const handleRef = (ref: HTMLLIElement | null, index: number) => {
    if (index === 0 && firstOptionRef) firstOptionRef.current = ref;
    if (ref) optionsRef.current.push(ref);
  };

  const handleClick = (value: string) => {
    onOptionSelect(value);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLUListElement>) => {
    if (event.code === "ArrowUp") {
      if (currentIndex.current === 0) return;
      currentIndex.current -= 1;
      optionsRef.current[currentIndex.current]?.focus();
    } else if (event.code === "ArrowDown") {
      if (currentIndex.current === options.length - 1) return;
      currentIndex.current += 1;
      optionsRef.current[currentIndex.current]?.focus();
    } else if (event.code === "Tab") {
      if (event.shiftKey) currentIndex.current -= 1;
      else currentIndex.current += 1;
    }
    console.log(currentIndex.current);
  };

  return (
    <OptionsWrapper tabIndex={-1} $open={open} onKeyDown={handleKeyDown}>
      {options.map((option, index) => (
        <OptionWrapper
          ref={(ref) => handleRef(ref, index)}
          tabIndex={0}
          key={option}
          onClick={() => handleClick(option)}
        >
          {option}
        </OptionWrapper>
      ))}
    </OptionsWrapper>
  );
}

export default Options;
