import useDate from "./useDate";
import { useQuery } from "@tanstack/react-query";
import { getBoardsByDate } from "../api/api";

export default function useBoards() {
  const { date } = useDate();
  const { data: boards, isLoading } = useQuery(["boards", date], () =>
    getBoardsByDate({ date: date })
  );
  return { boards, isLoading };
}
