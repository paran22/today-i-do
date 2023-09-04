import { getDatabase, get, ref, set, remove } from "firebase/database";
import uuid from "react-uuid";
import { app } from "../firebase";
import { Board } from "../pages/WriteBoardPage";

const db = getDatabase(app);
const boardDbKey = "boards";

interface SaveBoardProps {
  board: Board;
  userId: string;
}

export async function createBoard({ board, userId }: SaveBoardProps) {
  const boardId = uuid();
  set(ref(db, `${boardDbKey}/${userId}/${boardId}`), {
    ...board,
  }).catch(() => {
    throw Error();
  });
}
