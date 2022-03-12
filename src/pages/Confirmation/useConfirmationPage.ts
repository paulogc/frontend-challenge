import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "app/store";
import { selectFormData } from "domain/signUpForm/data/selectors";
import { submitForm } from "domain/signUpForm/data/api";
import { setStepCompleted } from "domain/signUpForm/data/actions";

export const useConfirmationPage = () => {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const form = useAppSelector(selectFormData);

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      const response = await submitForm(form);
      if (response) {
        dispatch(setStepCompleted(3));
        navigate("../success");
      }
    } catch (e) {
      dispatch(setStepCompleted(3));
      navigate("../error");
    }
  };

  const handleGoBack = () => {
    navigate("../more-info");
  };

  return { form, handleGoBack, handleSubmit, isLoading };
};
