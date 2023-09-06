import { toDate } from "../utils/dateUtils";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";

interface DateControllerProps {
  date: Date;
  onLeftClick: () => void;
  onRightClick: () => void;
}

export default function DateController({
  date,
  onLeftClick,
  onRightClick,
}: DateControllerProps) {
  return (
    <section className="flex w-full justify-center items-center text-2xl gap-4">
      <button onClick={onLeftClick}>
        <BiSolidLeftArrow />
      </button>
      {toDate(date)}
      <button onClick={onRightClick}>
        <BiSolidRightArrow />
      </button>
    </section>
  );
}
