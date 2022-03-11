import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "app/store";
import { selectForm } from "domain/signUpForm/data/selectors";
import { submitForm } from "domain/signUpForm/data/api";

export const useConfirmationPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const form = useAppSelector(selectForm);

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      const response = await submitForm(form);
      if (response) {
        navigate("../success");
      }
    } catch (e) {
      navigate("../error");
    }
  };

  const handleGoBack = () => {
    navigate("../more-info");
  };

  return { form, handleGoBack, handleSubmit, isLoading };
};
