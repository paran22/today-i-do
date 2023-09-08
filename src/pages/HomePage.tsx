import DateController from "../components/DateController";
import Boards from "../components/Boards";
import { useLocation } from "react-router-dom";
import useDate from "../hooks/useDate";
import { useEffect } from "react";

export default function HomePage() {
  const location = useLocation();
  const date = location.search.split("date=")[1];
  const { setDate } = useDate();
  useEffect(() => {
    setDate(new Date(date));
  }, [date, setDate]);
  return (
    <>
      <DateController />
      <Boards />
    </>
  );
}
