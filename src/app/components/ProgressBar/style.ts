/** @format */
"use client";
import styled from "styled-components";

export const ProgressWrapper = styled.div`
  .circular-progressbar {
    display: block;
    margin: 0 auto;
  }

  .circle-background {
    stroke: #e5e6e9;
  }

  .circle-progress {
    stroke: #713fff;
    stroke-linecap: round;
    transition: stroke-dashoffset 0.5s ease 0s;
  }
`;
