import { BoardModel } from "../model/boardModel";

export default function Board({ board }: { board: BoardModel }) {
  const { todayDone, good, notGood, username } = board;
  return (
    <section className="flex flex-col text-slate-700 bg-secondary rounded-lg py-2 px-2">
      <div className="border-b-2 px-1 py-1">
        <p>{todayDone}</p>
      </div>
      <div className="py-1 px-1">
        <p>👍 {good}</p>
        <p>😭 {notGood}</p>
        <p className="pt-2 px-2 text-end italic">{`by. ${username}`}</p>
      </div>
    </section>
  );
}
