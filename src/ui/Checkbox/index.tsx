import React from "react";
import { CheckBoxContainer } from "ui/Checkbox/styles";

type CheckboxProps = {
  value: boolean;
  onClick: () => void;
  name?: string;
  label: string;
};

export const Checkbox = ({ value, onClick, name, label }: CheckboxProps) => {
  return (
    <CheckBoxContainer onClick={onClick} role="button">
      <input name={name} checked={value} type="checkbox" />
      {label}
    </CheckBoxContainer>
  );
};
