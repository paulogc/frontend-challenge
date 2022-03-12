import { useState } from "react";
import { selectSignUpValues } from "domain/signUpForm/data/selectors";
import { useAppSelector, useAppDispatch } from "app/store/index";
import { setFormValue, setStepCompleted } from "domain/signUpForm/data/actions";
import { useNavigate } from "react-router-dom";
import { validate, validateAll } from "domain/signUpForm/utils/validations";
import type { FormData } from "domain/signUpForm/data/types";

export const useSignUpPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const initialState = useAppSelector(selectSignUpValues);
  const [errors, setError] = useState<Partial<FormData>>({});
  const [inputValues, setInputValues] =
    useState<Partial<FormData>>(initialState);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const error = validate(value, name as keyof FormData);
    console.log(error);
    setError({ ...errors, [name]: error });

    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(setFormValue(inputValues as FormData));
    dispatch(setStepCompleted(1));
    navigate("../more-info");
  };

  return {
    handleSubmit,
    handleInputChange,
    inputValues,
    errors,
    hasError: validateAll(inputValues),
  };
};
