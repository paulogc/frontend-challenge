import { messages, EMAIL_REGEX } from "domain/signUpForm/data/constants";
import { FormData } from "domain/signUpForm/data/types";

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
