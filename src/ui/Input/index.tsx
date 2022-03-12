import React from "react";
import { StyledInput, InputWrapper, ErrorLabel } from "ui/Input/styles";

type InputProps = {
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ error, ...rest }: InputProps) => {
  return (
    <InputWrapper>
      <StyledInput hasError={!!error} {...rest} />
      {error && <ErrorLabel>{error}</ErrorLabel>}
    </InputWrapper>
  );
};
