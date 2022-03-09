import styled, { css } from "styled-components";

export const StyledSelect = styled.select(
  ({ theme }) => css`
    width: 100%;
    background-color: ${theme.color.lightGray};
    border: 1px solid ${theme.color.darkGray};
    padding: 20px 16px 8px;
    font-size: 16px;
    margin: 10px 0;
  `
);
