import React from "react";
import {
  Title,
  MainContainer,
  Wrapper,
  StyledButton,
  ButtonsContainer,
} from "domain/signUpForm/ui/commonStyles";
import { useConfirmationPage } from "pages/Confirmation/useConfirmationPage";
import { fieldLabels } from "domain/signUpForm/data/constants";
import {
  List,
  ListItem,
  FieldLabel,
  SpinnerContainer,
} from "pages/Confirmation/styles";
import { Spinner } from "ui/Spinner/styles";
import type { FormData } from "domain/signUpForm/data/types";
import { useStepCompleted } from "domain/signUpForm/hooks/useStepCompleted";

export const Confirmation = () => {
  useStepCompleted();
  const { form, handleGoBack, handleSubmit, isLoading } = useConfirmationPage();
  const formKeys = Object.keys(form);

  const renderValues = (key: keyof FormData) => {
    switch (key) {
      case "terms": {
        return form.terms ? "Agree" : "Disagree";
      }
      case "password": {
        return form.password.replace(/./g, "*");
      }
      default: {
        return form[key];
      }
    }
  };

  return (
    <MainContainer>
      <Wrapper>
        <Title>Confirmation</Title>
        <List>
          {formKeys.map((key: keyof FormData) => (
            <ListItem key={key}>
              <FieldLabel>{fieldLabels[key]}:</FieldLabel> {renderValues(key)}
            </ListItem>
          ))}
        </List>
        {isLoading ? (
          <SpinnerContainer>
            <Spinner />
          </SpinnerContainer>
        ) : (
          <ButtonsContainer>
            <StyledButton onClick={handleGoBack}>Back</StyledButton>
            <StyledButton onClick={handleSubmit} primary>
              Submit
            </StyledButton>
          </ButtonsContainer>
        )}
      </Wrapper>
    </MainContainer>
  );
};
