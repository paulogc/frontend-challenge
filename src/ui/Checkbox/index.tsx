import React from "react";
import { CheckBoxContainer, Input } from "ui/Checkbox/styles";

type CheckboxProps = {
  value: boolean;
  onClick: () => void;
  name?: string;
  children: React.ReactNode;
};

export const Checkbox = ({ value, onClick, name, children }: CheckboxProps) => {
  return (
    <CheckBoxContainer role="button">
      <Input name={name} onClick={onClick} checked={value} type="checkbox" />
      {children}
    </CheckBoxContainer>
  );
};
