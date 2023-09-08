import { useRecoilState } from "recoil";
import { dateState } from "../state/dateState";
import { minusOneDate, plusOneDate, toDate } from "../utils/dateUtils";
import useRoute from "./useRoute";

export default function useDate() {
  const [date, setDate] = useRecoilState(dateState);
  const { navigateToHome } = useRoute();
  const toOneDayAgo = () => {
    const oneDayAgo = minusOneDate(date);
    setDate(oneDayAgo);
    navigateToHome(toDate(oneDayAgo));
  };
  const toOneDayNext = () => {
    const oneDayNext = plusOneDate(date);
    setDate(oneDayNext);
    navigateToHome(toDate(oneDayNext));
  };
  const toToday = () => setDate(new Date());
  return { date, setDate, toOneDayAgo, toOneDayNext, toToday };
}
