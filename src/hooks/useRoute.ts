import { useNavigate } from "react-router-dom";

export default function useRoute() {
  const navigator = useNavigate();
  const navigateToHome = () => navigator("/");
  const navigateToLogin = () => navigator("/login");
  const navigateToWriteBoard = () => navigator("/boards/write");
  return { navigateToHome, navigateToLogin, navigateToWriteBoard };
}
