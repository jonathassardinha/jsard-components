import { OptionsWrapper, OptionWrapper } from "./styles";

interface OptionsProps {
  options: Array<string>;
  onOptionSelect: Function;
}

function Options({ options, onOptionSelect }: OptionsProps) {
  const handleClick = (value: string) => {
    onOptionSelect(value);
  };

  return (
    <OptionsWrapper>
      {options.map((option) => (
        <OptionWrapper
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
