import { useNavigate } from "react-router-dom";
import { selectStepCompleted } from "domain/signUpForm/data/selectors";
import { useAppSelector } from "app/store";
import { useEffect } from "react";

export const useStepCompleted = () => {
  const navigate = useNavigate();
  const stepCompleted = useAppSelector(selectStepCompleted);

  useEffect(() => {
    switch (stepCompleted) {
      case 0: {
        navigate("../");
        break;
      }
      case 1: {
        navigate("../more-info");
        break;
      }
      case 2: {
        navigate("../confirmation");
        break;
      }
    }
  }, []);
};
