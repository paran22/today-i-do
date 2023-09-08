import { getDatabase, get, ref, set, remove } from "firebase/database";
import uuid from "react-uuid";
import { app } from "../firebase";
import { toDateString } from "../utils/dateUtils";
import { BoardModel, BoardInput } from "../model/boardModel";

const db = getDatabase(app);
const boardDbKey = "boards";

interface CreateBoardProps {
  board: BoardInput;
  userId: string;
  username: string;
}

export async function createBoard({
  board,
  userId,
  username,
}: CreateBoardProps) {
  const boardId = uuid();
  const createAt = new Date();
  const date = toDateString(createAt);
  try {
    set(ref(db, `${boardDbKey}/${date}/${userId}/${boardId}`), {
      ...board,
      createAt: createAt.toDateString(),
      username: username,
      userId: userId,
    });
  } catch (e) {
    console.error(e);
    throw Error();
  }
}
interface GetBoardsByDateProps {
  date: Date;
}

interface BoardResponse {
  id: string;
  board: BoardModel;
}

export async function getBoardsByDate({ date }: GetBoardsByDateProps) {
  const dateString = toDateString(date);
  try {
    const data = await get(ref(db, `${boardDbKey}/${dateString}`));
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
