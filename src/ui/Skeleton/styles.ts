import styled, { css, keyframes } from "styled-components";

const shimmer = keyframes`
  from {
    background-position: -800px 0
  }
  to {
    background-position: 800px 0
  }
`;

export const AnimatedBackground = styled.div<{ width: number; height: number }>(
  ({ width, height }) => css`
    animation-duration: 2s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: ${shimmer};
    animation-timing-function: linear;
    background-color: #f6f7f8;
    background: linear-gradient(to right, #eeeeee 8%, #bbbbbb 18%, #eeeeee 33%);
    background-size: 800px 104px;
    height: ${height}px;
    width: ${width}px;
    position: relative;
  `
);
