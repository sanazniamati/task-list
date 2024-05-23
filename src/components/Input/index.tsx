/** @format */

import { FC } from "react";
import { useForm } from "react-hook-form";
import { InputWrapper } from "./style";

interface InputProps {
  label: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  value: string;
}
const Input: FC<InputProps> = ({ label, placeholder, onChange, name, value }) => {
  const form = useForm();
  const { register } = form;
  // const { name, ref, onBlur } = register;
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
