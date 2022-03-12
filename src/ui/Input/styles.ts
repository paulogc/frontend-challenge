import styled, { css } from "styled-components";

export const StyledInput = styled.input<{ hasError: boolean }>(
  ({ theme, hasError }) => css`
    background-color: ${theme.color.lightGray};
    border: 1px solid
      ${hasError ? theme.background.error : theme.color.darkGray};
    padding: 20px 16px 8px;
    font-size: 16px;
  `
);

export const InputWrapper = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    margin: 10px 0;
    color: ${theme.background.error};
  `
);

export const ErrorLabel = styled.span`
  font-size: 12px; ;
`;
