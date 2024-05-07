/** @format */

"use client";
import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: fixed;
  z-index: 9999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.5);

  /* modal content */
  .modal-content {
    background-color: #ffffff;
    box-shadow: 0px 6px 58px rgba(121, 145, 173, 0.195504);
    border-radius: 24px;
    padding: 40px 60px;
    margin: 15% auto;
    width: 40%;
    min-height: 200px;
    @media (max-width: 600px) {
      width: 90%;
      margin: 50% auto;
      padding: 30px 30px;
    }
  }
`;
