import DateController from "../components/DateController";
import BoardList from "../components/BoardList";
import { useState } from "react";
import { toOneDayAgo, toOneDayNext } from "../utils/dateUtils";

export default function HomePage() {
  const [date, setDate] = useState(new Date());
  const handleLeftClick = () => {
    setDate((prev) => toOneDayAgo(prev));
  };
  const handleRightClick = () => {
    setDate((prev) => toOneDayNext(prev));
  };
  return (
    <>
      <DateController
        date={date}
        onLeftClick={handleLeftClick}
        onRightClick={handleRightClick}
      />
      <BoardList date={date} />
    </>
  );
}
