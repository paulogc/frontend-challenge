import styled, { css } from "styled-components";

export const Button = styled.button<{ primary?: boolean }>(
  ({ theme, primary }) => css`
    cursor: pointer;
    font-weight: ${theme.fontWeights.bold};
    font-size: 18px;
    padding: 12px 32px;
    border: 2px solid ${theme.background.primary};
    background-color: ${primary
      ? theme.background.primary
      : theme.background.white};
    color: ${primary ? theme.color.white : theme.color.darkGray};
    border-radius: 3px;
  `
);
