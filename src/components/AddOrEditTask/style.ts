/** @format */

"use client";
import styled from "styled-components";

export const FormWrapper = styled.form`
  .modal-priority {
    margin-top: 20px;
    span {
      font-size: 14px;
      font-weight: 700;
      color: $gray;
    }
  }

  .priority-buttons {
    display: flex;
    gap: 13px;
    margin-top: 12px;
    @media (max-width: 600) {
      gap: 10px;
    }

    // $warning-color: #ffbd21;
    // $error-color: #f73446;
    // $success-color: #0ac947;
    li {
      /* border: 1px solid #ffbd21; */
      border-radius: 10px;
      font-size: 14px;
      font-weight: 500;
      /* color: #ffbd21; */
      text-transform: capitalize;
      padding: 10px 0;
      width: 90px;
      text-align: center;
      cursor: pointer;
    }
    .high {
      border: 1px solid #f73446;
      color: #f73446;
      &-selected {
        background-color: #f73446;
        color: #fff;
      }
    }
    .medium {
      border: 1px solid #ffbd21;
      color: #ffbd21;
      &-selected {
        background-color: #ffbd21;
        color: #fff;
      }
    }
    .low {
      border: 1px solid #0ac947;
      color: #0ac947;
      &-selected {
        background-color: #0ac947;
        color: #fff;
      }
    }
  }
`;
