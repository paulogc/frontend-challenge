import { useState } from "react";
import { selectSignUpValues } from "domain/signUpForm/data/selectors";
import { useAppSelector, useAppDispatch } from "app/store/index";
import { setFormValue } from "domain/signUpForm/data/actions";
import { useNavigate } from "react-router-dom";
import type { FormData } from "domain/signUpForm/data/types";

export const useSignUpPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const initialState = useAppSelector(selectSignUpValues);

  const [inputValues, setInputValues] =
    useState<Partial<FormData>>(initialState);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(setFormValue(inputValues as FormData));
    navigate("../more-info");
  };
  return { handleSubmit, handleInputChange, inputValues };
};
