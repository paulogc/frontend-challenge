import React, { HTMLAttributes } from "react";
import { StyledSelect } from "ui/Select/styles";

type Select = {
  options: string[];
  selected: string;
  name?: string;
  nullOptionText?: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export const Select = ({
  options,
  selected,
  name,
  onChange,
  nullOptionText,
}: Select) => (
  <StyledSelect
    data-testid="select"
    name={name}
    onChange={onChange}
    value={selected}
  >
    {nullOptionText && (
      <option disabled value="">
        {nullOptionText}
      </option>
    )}
    {options.map((option) => (
      <option key={option} value={option}>
        {option}
      </option>
    ))}
  </StyledSelect>
);
