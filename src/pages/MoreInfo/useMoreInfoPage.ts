import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "app/store";
import { selectMoreInfoValues } from "domain/signUpForm/data/selectors";
import { setFormValue, setStepCompleted } from "domain/signUpForm/data/actions";
import { validateAll } from "domain/signUpForm/utils/validations";
import { getColors } from "domain/signUpForm/data/api";
import type { FormData } from "domain/signUpForm/data/types";

export const useMoreInfoPage = () => {
  const dispatch = useAppDispatch();
  const initialState = useAppSelector(selectMoreInfoValues);
  const navigate = useNavigate();
  const [colors, setColors] = useState([]);
  const [inputValues, setInputValues] =
    useState<Partial<FormData>>(initialState);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(setStepCompleted(2));
    dispatch(setFormValue(inputValues as FormData));
    navigate("../confirmation");
  };

  const handleGoBack = () => {
    navigate("../");
  };

  const handleColorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setInputValues({ ...inputValues, color: value });
  };

  const handleTermsChange = () => {
    setInputValues({ ...inputValues, terms: !inputValues.terms });
  };

  useEffect(() => {
    async function fetchColors() {
      setIsLoading(true);
      try {
        const colors = (await getColors()) as string[];
        setColors(colors);
        setIsLoading(false);
      } catch (e) {
        setIsLoading(false);
      }
    }

    fetchColors();
  }, []);

  return {
    isLoading,
    colors,
    handleGoBack,
    handleSubmit,
    inputValues,
    handleColorChange,
    handleTermsChange,
    hasError: validateAll(inputValues),
  };
};
