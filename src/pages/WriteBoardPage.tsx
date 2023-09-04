import React, { useState } from "react";
import Button from "../components/Button";
import WriteBoardTextArea from "../components/WriteBoardTextArea";
import ConfirmModal from "../components/ConfirmModal";
import { createBoard } from "../api/api";
import useAuthState from "../hooks/useAuthState";
import { useMutation } from "@tanstack/react-query";

export interface Board {
  todayDone: string;
  good: string;
  notGood: string;
}

export default function WriteBoardPage() {
  const [showModal, setShowModal] = useState(false);
  const [board, setBoard] = useState<Board>({
    todayDone: "",
    good: "",
    notGood: "",
  });
  const { todayDone, good, notGood } = board;
  const { user } = useAuthState();
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setBoard((prev) => ({ ...prev, [name]: value }));
  };
  const {
    mutate: saveBoard,
    isLoading,
    isError,
    isSuccess,
  } = useMutation(createBoard);
  const handleButtonClick = () => {
    if (!user?.uid) return;
    if (todayDone === "" || good === "" || notGood === "") {
      setShowModal(true);
      return;
    }
    saveBoard({ board: board, userId: user.uid });
  };
  if (isLoading) return <p>로딩중...</p>;
  if (isError) return <p>에러??...</p>;
  if (isSuccess) return <p>성공!...</p>;
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
      <Button name="저장하기" onClick={handleButtonClick} />
      {showModal && (
        <ConfirmModal
          title="내용을 모두 작성해주세요."
          showModal={showModal}
          setShowModal={setShowModal}
        />
      )}
    </section>
  );
}
