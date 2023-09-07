import useDate from "./useDate";
import { useQuery } from "@tanstack/react-query";
import { getBoardsByDate } from "../api/api";

export default function useBoards() {
  const { date } = useDate();
  const { data: boards } = useQuery(["boards", date], () =>
    getBoardsByDate({ dateTime: date })
  );
  return { boards };
}
