import { useQuery } from "@tanstack/react-query";
import { getBoardsByDate } from "../api/api";
import BoardItem from "./BoardItem";
import useDate from "../hooks/useDate";

export default function BoardList() {
  const { date } = useDate();
  const { data: boardResponses } = useQuery(["boards", date], () =>
    getBoardsByDate({ dateTime: date })
  );
  return (
    <section className="px-4 py-4">
      {boardResponses && (
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {boardResponses.map((response) => (
            <BoardItem key={response.id} board={response.board} />
          ))}
        </ul>
      )}
    </section>
  );
}
