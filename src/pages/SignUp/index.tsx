import React from "react";
import {
  Title,
  Form,
  MainContainer,
  StyledSubmitButton,
  ButtonsContainer,
} from "domain/signUpForm/ui/commonStyles";
import { Input } from "ui/Input";
import { useSignUpPage } from "pages/SignUp/useSigUpPage";
import { fieldLabels } from "domain/signUpForm/data/constants";

export const SignUp = () => {
  const { handleSubmit, inputValues, handleInputChange, hasError, errors } =
    useSignUpPage();

  return (
    <MainContainer>
      <Form onSubmit={handleSubmit}>
        <Title>Sign Up</Title>
        <Input
          error={errors.name}
          name="name"
          onChange={handleInputChange}
          placeholder={fieldLabels.name}
          value={inputValues.name}
        />
        <Input
          error={errors.email}
          name="email"
          onChange={handleInputChange}
          placeholder={fieldLabels.email}
          value={inputValues.email}
        />
        <Input
          error={errors.password}
          name="password"
          onChange={handleInputChange}
          placeholder={fieldLabels.password}
          type="password"
          value={inputValues.password}
        />
        <ButtonsContainer>
          <StyledSubmitButton disabled={hasError} type="submit" value="Next" />
        </ButtonsContainer>
      </Form>
    </MainContainer>
  );
};
