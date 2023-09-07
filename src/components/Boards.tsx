import BoardItem from "./BoardItem";
import useBoards from "../hooks/useBoards";

export default function Boards() {
  const { boards } = useBoards();

  return (
    <section className="px-4 py-4">
      {boards && (
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {boards.map((board) => (
            <BoardItem key={board.id} board={board.board} />
          ))}
        </ul>
      )}
    </section>
  );
}
