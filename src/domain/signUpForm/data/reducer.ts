import { createReducer } from "@reduxjs/toolkit";
import type { FormData } from "domain/signUpForm/data/types";
import { resetForm, setFormValue } from "domain/signUpForm/data/actions";

const initialState = {
  name: "",
  email: "",
  password: "",
  color: "",
  terms: false,
};

export const formReducer = createReducer<FormData>(initialState, (builder) => {
  builder
    .addCase(setFormValue, (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    })
    .addCase(resetForm, (state, action) => {
      return initialState;
    });
});
