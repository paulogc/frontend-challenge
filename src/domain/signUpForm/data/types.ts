export type FormData = {
  name: string;
  email: string;
  password: string;
  color: string;
  terms: boolean;
};

export type FormLabel = Record<keyof FormData, string>;
