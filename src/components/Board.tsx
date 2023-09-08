import { BoardModel } from "../model/boardModel";
import { PiNotepadDuotone } from "react-icons/pi";
import { FaRegTrashAlt } from "react-icons/fa";
import useAuthState from "../hooks/useAuthState";

export default function Board({ board }: { board: BoardModel }) {
  const { todayDone, good, notGood, username, userId } = board;
  const { user } = useAuthState();
  const isMine = user?.uid === userId;

  return (
    <section className="flex flex-col text-slate-700 bg-secondary rounded-lg py-2 px-2">
      <div className="px-1 py-1 flex flex-col items-center gap-2">
        <PiNotepadDuotone className="text-4xl" />
        <p className="text-xl italic">{todayDone}</p>
      </div>
      <div className="py-1 px-1">
        <p>👍 {good}</p>
        <p>😭 {notGood}</p>
      </div>
      <div className="flex justify-between pt-2 px-2 ">
        <button>
          <FaRegTrashAlt className={`${isMine ? "visible" : "hidden"}`} />
        </button>
        <p className="italic">{`by. ${username}`}</p>
      </div>
    </section>
  );
}
