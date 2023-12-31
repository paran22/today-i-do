import React, { useState } from "react";
import Button from "../components/Button";
import ConfirmModal from "../components/Modal";
import { createBoard } from "../api/api";
import useAuthState from "../hooks/useAuthState";
import { useMutation } from "@tanstack/react-query";
import Loading from "../components/Loading";
import useRoute from "../hooks/useRoute";
import { BoardInput } from "../model/boardModel";
import WriteBoardTextArea from "../components/board/WriteBoardTextArea";

export default function WriteBoardPage() {
  const [showEmptyModal, setShowEmptyModal] = useState(false);
  const { navigateToHome } = useRoute();

  const [board, setBoard] = useState<BoardInput>({
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

  const { mutate: saveBoard, isLoading, isSuccess } = useMutation(createBoard);
  const handleButtonClick = () => {
    if (!user?.uid || !user.displayName) return;
    if (todayDone === "" || good === "" || notGood === "") {
      setShowEmptyModal(true);
      return;
    }
    saveBoard({ board: board, userId: user.uid, username: user.displayName });
  };
  return (
    <>
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
      </section>
      <ConfirmModal
        title="내용을 모두 작성해주세요."
        visible={showEmptyModal}
        setVisible={setShowEmptyModal}
      />
      <ConfirmModal
        title="저장되었습니다!!"
        visible={isSuccess}
        setVisible={() => {}}
        onConfirmClick={navigateToHome}
      />
      <Loading visible={isLoading} />
    </>
  );
}
