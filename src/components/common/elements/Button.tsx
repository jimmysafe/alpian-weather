import { ReactNode } from "react";
import Icon from "./Icon";

type ButtonProps = {
  children: ReactNode;
  onClick: () => void;
  iconName?: string;
  iconClassName?: string;
  className?: string;
};

const Button = ({
  children,
  onClick,
  iconName,
  className,
  iconClassName,
}: ButtonProps) => {
  return (
    <button
      role="button"
      onClick={onClick}
      className={`flex justify-between items-center ${className}`}
    >
      {iconName && (
        <Icon
          name={iconName}
          size={20}
          accessibilityText={iconName}
          className={`mr-1 ${iconClassName}`}
        />
      )}
      {children}
    </button>
  );
};

export default Button;
