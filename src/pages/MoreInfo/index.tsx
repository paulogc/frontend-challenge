import React from "react";
import {
  Title,
  Form,
  SignUpContainer,
  StyledButton,
} from "pages/SignUp/styles";
import { ButtonsContainer } from "pages/MoreInfo/style";
import { Select } from "ui/Select";
import { useMoreInfoPage } from "./useMoreInfoPage";
import { Skeleton } from "ui/Skeleton";

export const MoreInfo = () => {
  const { colors, isLoading } = useMoreInfoPage();

  return (
    <SignUpContainer>
      <Form>
        <Title>Additional Info</Title>
        {isLoading ? (
          <Skeleton width={300} height={52} />
        ) : (
          <Select options={colors} selected="" />
        )}

        <ButtonsContainer>
          <StyledButton>Back</StyledButton>
          <StyledButton primary>Next</StyledButton>
        </ButtonsContainer>
      </Form>
    </SignUpContainer>
  );
};
