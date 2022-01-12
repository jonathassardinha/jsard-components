import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ButtonWrapper } from "./styles";

interface IconButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  icon: IconProp;
  type?: "button" | "reset" | "submit";
  className?: string;
}

function IconButton({ icon, onClick, type, className }: IconButtonProps) {
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    onClick(event);
  };

  return (
    <ButtonWrapper
      className={className}
      type={type || "button"}
      onClick={handleClick}
    >
      <FontAwesomeIcon icon={icon} />
    </ButtonWrapper>
  );
}

export default IconButton;
