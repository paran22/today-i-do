import { useNavigate } from "react-router-dom";
import { BoardModel } from "../model/boardModel";
import { toDateString } from "../utils/dateUtils";

export default function useRoute() {
  const navigator = useNavigate();
  const navigateToPath = (path: string) => navigator(path);
  const navigateToHome = (date = toDateString(new Date())) => {
    navigator({
      pathname: "/boards",
      search: `?date=${date}`,
    });
  };
  const navigateToLogin = () => navigator("/login");
  const navigateToWriteBoard = () => navigator("/boards/write");
  const navigateToBoardDetail = (board: BoardModel, date: Date) =>
    navigator(`/boards/${board.boardId}`, {
      state: { ...board, date },
    });
  return {
    navigateToPath,
    navigateToHome,
    navigateToLogin,
    navigateToWriteBoard,
    navigateToBoardDetail,
  };
}
