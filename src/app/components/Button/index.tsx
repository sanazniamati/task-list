/** @format */

import { FC } from "react";
import { ReactNode, ButtonHTMLAttributes } from "react";
import { ButtonContainer } from "./style";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  bgColor?: string;
  disabled?: boolean;
  icon?: ReactNode;
}

export const Button: FC<ButtonProps> = (props) => {
  const { bgColor, icon, children, onClick, disabled } = props;
  return (
    <ButtonContainer
      {...props}
      $disabled={disabled}
      $bgColor={bgColor}
      onClick={(e) => {
        if (!disabled) {
          onClick && onClick(e);
        } else {
          console.log("disabled");
        }
      }}
    >
      {icon && <span className="mr-[10px]">{icon}</span>}
      {children}
    </ButtonContainer>
  );
};
