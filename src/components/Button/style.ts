/** @format */
"use client";
import styled from "styled-components";
interface IButtonProps {
  $bgColor: string | undefined;
  $disabled?: boolean;
}

export const ButtonContainer = styled.button<IButtonProps>`
  background: ${({ $bgColor, $disabled }) =>
    $disabled ? $bgColor?.concat("50") : $bgColor};
  box-shadow: 0px 6px 12px rgba(113, 63, 255, 0.25);
  border-radius: 14px;
  padding: 13px 30px;
  outline: none;
  border: none;
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
  font-weight: 600;
  font-size: 16px;
  color: ${(props) => props.theme.white};

  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: red; */
  /* &:disabled {
    background-color: #7d8592;
    cursor: not-allowed;
  } */
`;
