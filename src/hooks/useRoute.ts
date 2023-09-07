import { useNavigate } from "react-router-dom";
import useDate from "./useDate";

export default function useRoute() {
  const { toToday } = useDate();
  const navigator = useNavigate();
  const navigateToPath = (path: string) => navigator(path);
  const navigateToHome = () => {
    toToday();
    navigator("/");
  };
  const navigateToLogin = () => navigator("/login");
  const navigateToWriteBoard = () => navigator("/boards/write");
  return {
    navigateToPath,
    navigateToHome,
    navigateToLogin,
    navigateToWriteBoard,
  };
}
