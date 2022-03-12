import { createAction } from "@reduxjs/toolkit";
import type { FormData } from "domain/signUpForm/data/types";

export const setFormValue = createAction<FormData>("form/setValues");
export const setStepCompleted = createAction<number>("form/setStepCompleted");
export const resetForm = createAction("form/reset");
