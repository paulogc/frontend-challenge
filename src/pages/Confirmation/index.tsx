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

export const Confirmation = () => {
  const { form, handleGoBack, handleSubmit, isLoading } = useConfirmationPage();
  const formKeys = Object.keys(form);

  const renderTerms = (value: boolean) => (value ? "Agree" : "Disagree");

  return (
    <MainContainer>
      <Wrapper>
        <Title>Confirmation</Title>
        <List>
          {formKeys.map((key: keyof FormData) => (
            <ListItem key={key}>
              <FieldLabel>{fieldLabels[key]}:</FieldLabel>{" "}
              {key === "terms" ? renderTerms(form[key]) : form[key]}
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
