import { useRecoilState } from "recoil";
import { dateState } from "../state/dateState";
import { minusOneDate, plusOneDate } from "../utils/dateUtils";

export default function useDate() {
  const [date, setDate] = useRecoilState(dateState);
  const toOneDayAgo = () => {
    setDate((prev) => minusOneDate(prev));
  };
  const toOneDayNext = () => {
    setDate((prev) => plusOneDate(prev));
  };

  return { date, toOneDayAgo, toOneDayNext };
}
