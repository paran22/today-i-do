import { useNavigate } from "react-router-dom";
import useDate from "./useDate";
import { toDateString } from "../utils/dateUtils";

export default function useRoute() {
  // const { toToday } = useDate();
  const navigator = useNavigate();
  const navigateToPath = (path: string) => navigator(path);
  const navigateToHome = (date = toDateString(new Date())) => {
    // toToday();
    navigator({
      pathname: "/boards",
      search: `?date=${date}`,
    });
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
