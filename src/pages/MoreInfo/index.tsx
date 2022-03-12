import React from "react";
import {
  Title,
  Form,
  MainContainer,
  StyledButton,
  StyledSubmitButton,
  ButtonsContainer,
} from "domain/signUpForm/ui/commonStyles";
import { Checkbox } from "ui/Checkbox";
import { Select } from "ui/Select";
import { useMoreInfoPage } from "./useMoreInfoPage";
import { StyledSkeleton } from "pages/MoreInfo/styles";
import { useStepCompleted } from "domain/signUpForm/hooks/useStepCompleted";

export const MoreInfo = () => {
  useStepCompleted();
  const {
    colors,
    isLoading,
    handleSubmit,
    handleGoBack,
    handleColorChange,
    handleTermsChange,
    inputValues,
    hasError,
  } = useMoreInfoPage();

  return (
    <MainContainer>
      <Form onSubmit={handleSubmit}>
        <Title>Additional Info</Title>
        {isLoading ? (
          <StyledSkeleton width={275} height={48} />
        ) : (
          <Select
            name="color"
            nullOptionText="Select Your Favorite Color"
            onChange={handleColorChange}
            options={colors}
            selected={inputValues.color}
          />
        )}
        <Checkbox onClick={handleTermsChange} value={inputValues.terms}>
          I agree to&nbsp;
          <a
            href="https://www.upgrade.com/funnel/borrower-documents/TERMS_OF_USE"
            target="_blank"
          >
            terms and conditions
          </a>
        </Checkbox>
        <ButtonsContainer>
          <StyledButton onClick={handleGoBack}>Back</StyledButton>
          <StyledSubmitButton disabled={hasError} type="submit" value="Next" />
        </ButtonsContainer>
      </Form>
    </MainContainer>
  );
};
