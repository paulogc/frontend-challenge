import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "app/store";
import { selectMoreInfoValues } from "domain/signUpForm/data/selectors";
import { setFormValue, setStepCompleted } from "domain/signUpForm/data/actions";
import type { FormData } from "domain/signUpForm/data/types";

export const useMoreInfoPage = () => {
  const dispatch = useAppDispatch();
  const initialState = useAppSelector(selectMoreInfoValues);
  const navigate = useNavigate();
  const [colors, setColor] = useState([]);
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
    setIsLoading(true);
    fetch(`http://localhost:3001/api/colors`)
      .then((res) => res.json())
      .then((data) => {
        setColor(data);
      })
      .catch(() => {
        setColor([]);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return {
    isLoading,
    colors,
    handleGoBack,
    handleSubmit,
    inputValues,
    handleColorChange,
    handleTermsChange,
  };
};
