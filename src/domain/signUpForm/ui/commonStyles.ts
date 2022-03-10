import styled, { css } from "styled-components";
import { SubmitButton, Button } from "ui/Button/styles";

export const SignUpContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Form = styled.form`
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

export const StyledSubmitButton = styled(SubmitButton)`
  margin-top: 20px;
`;

export const StyledButton = styled(Button)`
  margin-top: 20px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
