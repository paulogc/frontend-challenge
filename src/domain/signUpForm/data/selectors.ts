import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "app/store/types";

export const selectForm = (state: RootState) => state.form;

export const selectSignUpValues = createSelector(
  selectForm,
  ({ name, email, password }) => ({
    name,
    email,
    password,
  })
);

export const selectMoreInfoValues = createSelector(
  selectForm,
  ({ terms, color }) => ({
    terms,
    color,
  })
);
