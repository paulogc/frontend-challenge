import React from "react";
import {
  Title,
  Form,
  SignUpContainer,
  StyledSubmitButton,
  ButtonsContainer,
} from "domain/signUpForm/ui/commonStyles";
import { StyledInput } from "ui/Input/styles";
import { useSignUpPage } from "pages/SignUp/useSigUpPage";

export const SignUp = () => {
  const { handleSubmit, inputValues, handleInputChange } = useSignUpPage();
  return (
    <SignUpContainer>
      <Form onSubmit={handleSubmit}>
        <Title>Sign Up</Title>
        <StyledInput
          name="name"
          onChange={handleInputChange}
          placeholder="First name"
          value={inputValues.name}
        />
        <StyledInput
          name="email"
          onChange={handleInputChange}
          placeholder="E-mail"
          value={inputValues.email}
        />
        <StyledInput
          name="password"
          onChange={handleInputChange}
          placeholder="Password"
          type="password"
          value={inputValues.password}
        />
        <ButtonsContainer>
          <StyledSubmitButton type="submit" value="Next" />
        </ButtonsContainer>
      </Form>
    </SignUpContainer>
  );
};
