import { createReducer } from "@reduxjs/toolkit";
import type { FormState } from "domain/signUpForm/data/types";
import {
  resetForm,
  setFormValue,
  setStepCompleted,
} from "domain/signUpForm/data/actions";

const initialState = {
  data: {
    name: "",
    email: "",
    password: "",
    color: "",
    terms: false,
  },
  stepCompleted: 0,
};

export const formReducer = createReducer<FormState>(initialState, (builder) => {
  builder
    .addCase(setFormValue, (state, action) => {
      return {
        ...state,
        data: {
          ...state.data,
          ...action.payload,
        },
      };
    })
    .addCase(setStepCompleted, (state, action) => {
      return {
        ...state,
        stepCompleted: action.payload,
      };
    })
    .addCase(resetForm, () => {
      return initialState;
    });
});
