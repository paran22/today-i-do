import { useNavigate } from "react-router-dom";

export default function useRoute() {
  const navigator = useNavigate();
  const navigateToPath = (path: string) => navigator(path);
  const navigateToHome = () => navigator("/");
  const navigateToLogin = () => navigator("/login");
  const navigateToWriteBoard = () => navigator("/boards/write");
  return {
    navigateToPath,
    navigateToHome,
    navigateToLogin,
    navigateToWriteBoard,
  };
}
