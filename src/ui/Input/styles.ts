import styled, { css } from "styled-components";

export const StyledInput = styled.input(
  ({ theme }) => css`
    background-color: ${theme.color.lightGray};
    border: 1px solid ${theme.color.darkGray};
    padding: 20px 16px 8px;
    font-size: 16px;
    margin: 10px 0;
  `
);
