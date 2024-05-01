/** @format */

import { FC } from "react";
import { ButtonContainer } from "./style";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  bgColor?: string;
  disabled?: boolean;
}

export const Button: FC<ButtonProps> = ({ title, bgColor, disabled }) => {
  return (
    <ButtonContainer $bgColor={bgColor} $disabled={disabled}>
      {title}
    </ButtonContainer>
  );
};
