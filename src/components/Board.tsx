import { BoardModel } from "../model/boardModel";
import { PiNotepadDuotone } from "react-icons/pi";
import useDate from "../hooks/useDate";
import useRoute from "../hooks/useRoute";

export default function Board({ board }: { board: BoardModel }) {
  const { todayDone, good, notGood } = board;

  const { navigateToBoardDetail } = useRoute();
  const { date } = useDate();

  return (
    <button onClick={() => navigateToBoardDetail(board, date)}>
      <section className="flex flex-col text-slate-700 bg-secondary rounded-lg py-2 px-2">
        <div className="px-1 py-1 flex flex-col items-center gap-2">
          <PiNotepadDuotone className="text-4xl" />
          <p className="text-xl italic">{todayDone}</p>
        </div>
        <div className="py-1 px-1">
          <p>👍 {good}</p>
          <p>😭 {notGood}</p>
        </div>
      </section>
    </button>
  );
}
