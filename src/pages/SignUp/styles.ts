import styled, { css } from "styled-components";
import { Button } from "ui/Button/styles";

export const SignUpContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Form = styled.form`
  max-width: 360px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1(
  ({ theme }) => css`
    color: ${theme.text.primary};
    font-weight: 300;
    font-size: 32px;
  `
);

export const StyledButton = styled(Button)`
  margin-top: 20px;
`;
