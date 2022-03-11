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

export const Error = () => {
  const { handleRestart } = useRestart();

  return (
    <MainContainer>
      <Wrapper>
        <Title>Error</Title>
        <IconImg alt="success icon" src="/error.png" />
        <ResultPageText>
          Uh Oh, Something Went Wrong. Please try Again Later
        </ResultPageText>
        <StyledButton onChange={handleRestart}>Restart</StyledButton>
      </Wrapper>
    </MainContainer>
  );
};
