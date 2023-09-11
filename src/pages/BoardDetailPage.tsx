import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { PiNotepadDuotone } from "react-icons/pi";
import useAuthState from "../hooks/useAuthState";
import { useMutation } from "@tanstack/react-query";
import { deleteBoard } from "../api/api";
import { toDateString } from "../utils/dateUtils";
import { FaRegTrashAlt } from "react-icons/fa";
import Button from "../components/Button";
import AskModal from "../components/AskModal";
import Loading from "../components/Loading";
import ConfirmModal from "../components/ConfirmModal";
import useRoute from "../hooks/useRoute";

export default function BoardDetailPage() {
  const location = useLocation();
  const { todayDone, good, notGood, username, userId, boardId, date } =
    location.state;
  const { navigateToHome } = useRoute();
  const { user } = useAuthState();
  const isMine = user?.uid === userId;
  const [showAskDeleteModal, setShowAskDeleteModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const { mutate, isLoading, isSuccess } = useMutation(deleteBoard);
  const handleTrashClick = () => {
    if (!isMine) return;
    setShowAskDeleteModal(true);
  };
  const removeBoard = () => {
    mutate({ userId, boardId, date });
  };
  useEffect(() => {
    if (!isSuccess) return;
    setShowConfirmModal(true);
  }, [isSuccess]);

  return (
    <>
      <section className="flex flex-col items-center gap-3 pt-16">
        <div className="px-1 py-1 flex flex-col items-center gap-2">
          <PiNotepadDuotone className="text-4xl" />
          <p className="text-xl italic">{todayDone}</p>
        </div>
        <div className="py-1 px-1">
          <p>👍 {good}</p>
          <p>😭 {notGood}</p>
        </div>
        <div>
          <p className="italic">{`by. ${username}`}</p>
          <p>{toDateString(date)}</p>
        </div>
        {isMine && (
          <Button
            icon={<FaRegTrashAlt />}
            name="삭제하기"
            onClick={handleTrashClick}
          />
        )}
      </section>
      <AskModal
        title="삭제하시겠습니까?"
        visible={showAskDeleteModal}
        setVisible={setShowAskDeleteModal}
        onConfirmClick={removeBoard}
      />
      <ConfirmModal
        title="삭제되었습니다."
        visible={showConfirmModal}
        setVisible={setShowConfirmModal}
        onConfirmClick={navigateToHome}
      />
      {isLoading && <Loading visible={isLoading} />}
    </>
  );
}
