/** @format */

import { FC } from "react";
import { InputWrapper } from "./style";

// valdation
import { useController } from "react-hook-form";

interface InputProps {
  label: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  value: string;
}
const Input: FC<InputProps> = ({ label, placeholder, onChange, name, value }) => {
  return (
    <InputWrapper>
      <div className="input">
        <label htmlFor="">{label}</label>

        <input type="text" placeholder={placeholder} onChange={onChange} name={name} value={value} />
      </div>
    </InputWrapper>
  );
};
export default Input;
