import React from "react";
import {
  Title,
  MainContainer,
  Wrapper,
  StyledButton,
  IconImg,
  ResultPageText,
} from "domain/signUpForm/ui/commonStyles";
import { useRestart } from "domain/signUpForm/hooks/useRestart";

export const Success = () => {
  const { handleRestart } = useRestart();

  return (
    <MainContainer>
      <Wrapper>
        <Title>Success</Title>
        <IconImg alt="success icon" src="/success.png" />
        <ResultPageText>
          You Should Receive a Confirmation Email Soon
        </ResultPageText>
        <StyledButton onClick={handleRestart}>Restart</StyledButton>
      </Wrapper>
    </MainContainer>
  );
};
