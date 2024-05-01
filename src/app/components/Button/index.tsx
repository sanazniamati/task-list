/** @format */

import { FC } from "react";
import { MouseEventHandler, ReactNode } from "react";
import { ButtonContainer } from "./style";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  bgColor?: string;
  disabled?: boolean;
  icon?: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export const Button: FC<ButtonProps> = ({ title, bgColor, disabled, icon, onClick }) => {
  return (
    <ButtonContainer $bgColor={bgColor} disabled={disabled}>
      {icon && <span className="mr-[10px]">{icon}</span>}
      {title}
    </ButtonContainer>
  );
};
