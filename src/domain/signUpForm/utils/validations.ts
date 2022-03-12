import { FormData } from "../data/types";

const EMAIL_REGEX =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const messages = {
  required: "This field is required",
  email: "Please enter a valid email",
};

const required = (value: any) => {
  if (!value) return messages.required;
};

const emailFormat = (value: string) => {
  if (!EMAIL_REGEX.test(value)) return messages.email;
};

const validations: Record<keyof FormData, Array<(value: any) => string>> = {
  name: [required],
  email: [required, emailFormat],
  password: [required],
  color: [required],
  terms: [required],
};

export const validate = (value: string | boolean, key: keyof FormData) => {
  return validations[key]
    .map((validation) => validation(value))
    .find((error: string) => error);
};

export const validateAll = (form: Partial<FormData>) => {
  const keys = Object.keys(form);

  return keys
    .map((key: keyof FormData) => validate(form[key], key))
    .some((error: string) => error);
};
