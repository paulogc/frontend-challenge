import styled, { css } from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

export const Logo = styled.img`
  width: 50px;
`;

export const Text = styled.span(
  ({ theme }) => css`
    color: ${theme.text.primary};
    font-size: 20px;
    font-weight: 500;
  `
);
