import { toDateString } from "../utils/dateUtils";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import useDate from "../hooks/useDate";

export default function DateController() {
  const { date, toOneDayAgo, toOneDayNext } = useDate();
  return (
    <section className="flex w-full justify-center items-center text-2xl gap-4">
      <button onClick={toOneDayAgo}>
        <BiSolidLeftArrow />
      </button>
      {toDateString(date)}
      <button onClick={toOneDayNext}>
        <BiSolidRightArrow />
      </button>
    </section>
  );
}
