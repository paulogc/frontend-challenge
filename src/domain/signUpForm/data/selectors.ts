import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "app/store/types";

export const selectFormState = (state: RootState) => state.form;

export const selectFormData = createSelector(
  selectFormState,
  ({ data }) => data
);

export const selectSignUpValues = createSelector(
  selectFormData,
  ({ name, email, password }) => ({
    name,
    email,
    password,
  })
);

export const selectMoreInfoValues = createSelector(
  selectFormData,
  ({ terms, color }) => ({
    terms,
    color,
  })
);

export const selectStepCompleted = createSelector(
  selectFormState,
  ({ stepCompleted }) => stepCompleted
);
