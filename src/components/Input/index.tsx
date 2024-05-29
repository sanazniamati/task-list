/** @format */

import { FC, InputHTMLAttributes } from "react";
import { InputWrapper } from "./style";

// valdation
import { useController } from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}
const Input: FC<InputProps> = (props) => {
  const { label, placeholder, onChange, name, value } = props;
  return (
    <InputWrapper>
      <div className="input">
        <label htmlFor="">{label}</label>

        <input {...props} onChange={onChange} type="text" />
      </div>
    </InputWrapper>
  );
};
export default Input;
