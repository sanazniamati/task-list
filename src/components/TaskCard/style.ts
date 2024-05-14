/** @format */

"use client";
import styled from "styled-components";

export const TaskWrapper = styled.div`
  background: #fff;
  box-shadow: 0px 6px 58px rgba(196, 203, 214, 0.103611);
  border-radius: 24px;
  padding: 22px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
  .task-title {
    font-size: 14px;
    font-weight: 400;
    /* $secondary-color: #91929e; */
    color: #91929e;
    margin-bottom: 7px;
  }
  .task {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.2;
    color: $primary-color;
  }

  .priority-title {
    font-size: 14px;
    font-weight: 400;
    color: $secondary-color;
    margin-bottom: 7px;
    @include breakpoints.devices(sm) {
      margin-top: 15px;
    }
  }

  .priority {
    font-size: 14px;
    font-weight: 700;
    /* $success-color: #0ac947; */
    color: #0ac947;
    text-transform: capitalize;
  }
  .high-priority {
    /* $error-color: #f73446; */
    color: #f73446;
  }
  .medium-priority {
    /* $warning-color: #ffbd21; */
    color: #ffbd21;
  }
  .low-priority {
    color: $success-color;
  }
  .task-status-wrapper {
    width: 100px;
    text-align: center;
  }

  .status {
    background: rgba(125, 133, 146, 0.14);
    border-radius: 8px;
    padding: 7px 14px;
    color: #7d8592;
    font-weight: 700;
    font-size: 12px;
    outline: none;
    border: none;
    cursor: pointer;
  }
`;
