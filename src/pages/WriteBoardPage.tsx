import React, { useState } from "react";
import Button from "../components/button";
import WriteBoardTextArea from "../components/WriteBoardTextArea";

interface Board {
  todayDone: string;
  good: string;
  notGood: string;
}

export default function WriteBoardPage() {
  const [board, setBoard] = useState<Board>({
    todayDone: "",
    good: "",
    notGood: "",
  });
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setBoard((prev) => ({ ...prev, [name]: value }));
  };
  const onButtonClick = () => {
    console.log(board);
  };

  return (
    <section className="flex flex-col gap-10 pt-6 items-center">
      <p className="font-bold text-3xl">작성하기</p>
      <form className="flex flex-col gap-2" onSubmit={() => false}>
        <WriteBoardTextArea
          name="todayDone"
          display="오늘 한 일"
          value={board.todayDone}
          onChange={onChange}
        />
        <WriteBoardTextArea
          name="good"
          display="잘한 점"
          value={board.good}
          onChange={onChange}
        />
        <WriteBoardTextArea
          name="notGood"
          display="아쉬운 점"
          value={board.notGood}
          onChange={onChange}
        />
      </form>
      <Button name="저장하기" onClick={onButtonClick} />
    </section>
  );
}
