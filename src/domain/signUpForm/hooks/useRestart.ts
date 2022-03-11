import { useAppDispatch } from "app/store";
import { useNavigate } from "react-router-dom";
import { resetForm } from "domain/signUpForm/data/actions";

export const useRestart = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleRestart = () => {
    dispatch(resetForm());
    navigate("../");
  };

  return { handleRestart };
};
