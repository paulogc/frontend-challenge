import React from "react";
import { StyledSelect } from "ui/Select/styles";

type Select = {
  options: string[];
  selected: string;
};

export const Select = ({ options, selected }: Select) => (
  <StyledSelect>
    <option disabled>Select your favorite color</option>
    {options.map((option) => (
      <option key={option} value={option}>
        {option}
      </option>
    ))}
  </StyledSelect>
);
