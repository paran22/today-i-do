import useBoards from "../hooks/useBoards";
import Board from "./Board";
import EmptyBoards from "./EmptyBoards";

export default function Boards() {
  const { boards } = useBoards();
  const isEmptyBoards = boards !== undefined && boards.length === 0;
  if (isEmptyBoards) return <EmptyBoards />;
  return (
    <section className="px-4 py-4">
      {boards && (
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {boards.map((board) => (
            <Board key={board.id} board={board.board} />
          ))}
        </ul>
      )}
    </section>
  );
}
