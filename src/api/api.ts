import { getDatabase, get, ref, set, remove } from "firebase/database";
import uuid from "react-uuid";
import { app } from "../firebase";
import { toDate } from "../utils/dateUtils";
import { Board } from "../model/board";

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
interface GetBoardsByDateProps {
  dateTime: Date;
}

interface BoardResponse {
  id: string;
  board: Board;
}

export async function getBoardsByDate({ dateTime }: GetBoardsByDateProps) {
  const date = toDate(dateTime);
  try {
    const data = await get(ref(db, `${boardDbKey}/${date}`));
    const boards = data.val();
    if (!boards) return [];
    return Object.values(boards)
      .map((e) => Object.entries(e as Object))
      .flat()
      .map((e) => {
        const item: BoardResponse = { id: e[0], board: e[1] };
        return item;
      });
  } catch (e) {
    console.error(e);
    throw Error();
  }
}
