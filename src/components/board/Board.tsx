import { BoardModel } from "../../model/boardModel";
import { PiNotepadDuotone } from "react-icons/pi";
import useDate from "../../hooks/useDate";
import useRoute from "../../hooks/useRoute";

export default function Board({ board }: { board: BoardModel }) {
  const { todayDone, good, notGood } = board;

  const { navigateToBoardDetail } = useRoute();
  const { date } = useDate();

  return (
    <button onClick={() => navigateToBoardDetail(board, date)}>
      <section className="flex flex-col text-slate-700 bg-secondary rounded-lg py-2 px-2">
        <div className="px-1 py-1 flex flex-col items-center gap-2 h-30">
          <PiNotepadDuotone className="text-4xl" />
          <p className="text-xl italic whitespace-pre-line line-clamp-1">
            {todayDone}
          </p>
        </div>
        <div className="py-1 px-3">
          <p className="line-clamp-1">👍 {good}</p>
          <p className="line-clamp-1">😭 {notGood}</p>
        </div>
      </section>
    </button>
  );
}
