import { getDatabase, get, ref, set, remove } from "firebase/database";
import uuid from "react-uuid";
import { app } from "../firebase";
import { Board } from "../pages/WriteBoardPage";
import { toDate } from "../utils/dateUtils";

const db = getDatabase(app);
const boardDbKey = "boards";

interface CreateBoardProps {
  board: Board;
  userId: string;
}

export async function createBoard({ board, userId }: CreateBoardProps) {
  const boardId = uuid();
  const date = toDate(board.createAt);
  try {
    set(ref(db, `${boardDbKey}/${date}/${userId}/${boardId}`), {
      ...board,
      createAt: board.createAt.toDateString(),
    });
  } catch (e) {
    console.error(e);
    throw Error();
  }
}
