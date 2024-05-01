/** @format */
"use client";
import styled from "styled-components";

export const Container = styled.div`
  width: 720px;
  max-width: 100%;
  padding: 0 15px;
  margin: 0 auto;
  .page-wrapper {
    margin: 50px 0;
    /* background-color: lightgrey; */
  }

  .top-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  h2 {
    font-weight: 700;
    font-size: 36px;
    color: blue;
  }
  .task-container {
    margin-top: 40px;
  }
`;
