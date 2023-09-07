import { useRecoilState } from "recoil";
import { dateState } from "../state/dateState";
import { minusOneDate, plusOneDate } from "../utils/dateUtils";

export default function useDate() {
  const [date, setDate] = useRecoilState(dateState);
  const toOneDayAgo = () => setDate((prev) => minusOneDate(prev));
  const toOneDayNext = () => setDate((prev) => plusOneDate(prev));
  const toToday = () => setDate(new Date());
  return { date, toOneDayAgo, toOneDayNext, toToday };
}
