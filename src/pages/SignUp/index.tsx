import React from "react";
import {
  Title,
  Form,
  MainContainer,
  StyledSubmitButton,
  ButtonsContainer,
} from "domain/signUpForm/ui/commonStyles";
import { StyledInput } from "ui/Input/styles";
import { useSignUpPage } from "pages/SignUp/useSigUpPage";
import { fieldLabels } from "domain/signUpForm/data/constants";

export const SignUp = () => {
  const { handleSubmit, inputValues, handleInputChange } = useSignUpPage();
  return (
    <MainContainer>
      <Form onSubmit={handleSubmit}>
        <Title>Sign Up</Title>
        <StyledInput
          name="name"
          onChange={handleInputChange}
          placeholder={fieldLabels.name}
          value={inputValues.name}
        />
        <StyledInput
          name="email"
          onChange={handleInputChange}
          placeholder={fieldLabels.email}
          value={inputValues.email}
        />
        <StyledInput
          name="password"
          onChange={handleInputChange}
          placeholder={fieldLabels.password}
          type="password"
          value={inputValues.password}
        />
        <ButtonsContainer>
          <StyledSubmitButton type="submit" value="Next" />
        </ButtonsContainer>
      </Form>
    </MainContainer>
  );
};
