import React from "react";
import {
  Title,
  Form,
  SignUpContainer,
  StyledButton,
} from "pages/SignUp/styles";
import { StyledInput } from "ui/Input/styles";

export const SignUp = () => (
  <SignUpContainer>
    <Form>
      <Title>Sign Up</Title>
      <StyledInput placeholder="First name" />
      <StyledInput placeholder="E-mail" />
      <StyledInput placeholder="Password" type="password" />
      <StyledButton primary>Next</StyledButton>
    </Form>
  </SignUpContainer>
);
