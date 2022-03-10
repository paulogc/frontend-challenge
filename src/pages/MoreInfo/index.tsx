import React from "react";
import {
  Title,
  Form,
  SignUpContainer,
  StyledButton,
  StyledSubmitButton,
  ButtonsContainer,
} from "domain/signUpForm/ui/commonStyles";
import { Checkbox } from "ui/Checkbox";
import { Select } from "ui/Select";
import { useMoreInfoPage } from "./useMoreInfoPage";
import { Skeleton } from "ui/Skeleton";

export const MoreInfo = () => {
  const {
    colors,
    isLoading,
    handleSubmit,
    handleGoBack,
    handleColorChange,
    handleTermsChange,
    inputValues,
  } = useMoreInfoPage();

  return (
    <SignUpContainer>
      <Form onSubmit={handleSubmit}>
        <Title>Additional Info</Title>
        {isLoading ? (
          <Skeleton width={247} height={48} />
        ) : (
          <Select
            name="color"
            onChange={handleColorChange}
            options={colors}
            selected={inputValues.color}
          />
        )}
        <Checkbox
          label="I agree to terms and conditions"
          onClick={handleTermsChange}
          value={inputValues.terms}
        />
        <ButtonsContainer>
          <StyledButton onClick={handleGoBack}>Back</StyledButton>
          <StyledSubmitButton type="submit" value="Next" />
        </ButtonsContainer>
      </Form>
    </SignUpContainer>
  );
};
