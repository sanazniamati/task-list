/** @format */

import { FC } from "react";
import { ReactNode, ButtonHTMLAttributes } from "react";
import { ButtonContainer } from "./style";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  bgColor?: string | undefined;
  isdisabled?: boolean | undefined;
  icon?: ReactNode;
}

export const Button: FC<ButtonProps> = (props) => {
  // const { bgColor, icon, children, onClick, isdisabled } = props;
  let newProps = { ...props };
  (function () {
    delete newProps.bgColor;
    delete newProps.icon;
  })();

  return (
    <ButtonContainer
      {...newProps}
      $disabled={props.isdisabled}
      $bgColor={props.bgColor}
      onClick={(e) => {
        if (!props.isdisabled) {
          props.onClick && props.onClick(e);
        } else {
          console.log("disabled");
        }
      }}
    >
      {props.icon && <span className="mr-[10px]">{props.icon}</span>}
      {props.children}
    </ButtonContainer>
  );
};
