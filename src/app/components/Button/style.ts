/** @format */
"use client";
import styled from "styled-components";

export const ButtonContainer = styled.button<{ $bgColor: string | undefined }>`
  background: ${(props) => props.$bgColor};
  box-shadow: 0px 6px 12px rgba(113, 63, 255, 0.25);
  border-radius: 14px;
  padding: 13px 30px;
  outline: none;
  border: none;
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
  color: #ffffff;
  /* background-color: red; */
  /* &:disabled {
    background-color: #7d8592;
    cursor: not-allowed;
  } */
`;
