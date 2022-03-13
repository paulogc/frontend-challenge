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
      <Input
        data-testid="checkbox"
        name={name}
        onChange={onClick}
        checked={value}
        type="checkbox"
      />
      {children}
    </CheckBoxContainer>
  );
};
