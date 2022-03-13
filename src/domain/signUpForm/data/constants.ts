import type { FormLabel } from "domain/signUpForm/data/types";

export const fieldLabels: FormLabel = {
  name: "First Name",
  email: "Email",
  password: "Password",
  color: "Favorite Color",
  terms: "Terms and Conditions",
};

export const messages = {
  required: "This field is required",
  email: "Please enter a valid email",
};

export const EMAIL_REGEX =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
