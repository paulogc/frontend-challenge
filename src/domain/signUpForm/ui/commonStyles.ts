import styled, { css } from "styled-components";
import { SubmitButton, Button } from "ui/Button/styles";

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
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

export const IconImg = styled.img`
  width: 50px;
  height: 50px;
`;

export const ResultPageText = styled.h2(
  ({ theme }) => css`
    max-width: 300px;
    color: ${theme.text.secondary};
    font-size: 25px;
  `
);
