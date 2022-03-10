import React, { HTMLAttributes } from "react";
import { StyledSelect } from "ui/Select/styles";

type Select = {
  options: string[];
  selected: string;
  name?: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export const Select = ({ options, selected, name, onChange }: Select) => (
  <StyledSelect name={name} onChange={onChange} value={selected}>
    <option disabled value="">
      Select your favorite color
    </option>
    {options.map((option) => (
      <option key={option} value={option}>
        {option}
      </option>
    ))}
  </StyledSelect>
);
