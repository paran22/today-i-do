import { BoardModel } from "../model/boardModel";
import { PiNotepadDuotone } from "react-icons/pi";
import { FaRegTrashAlt } from "react-icons/fa";
import useAuthState from "../hooks/useAuthState";
import { useMutation } from "@tanstack/react-query";
import { deleteBoard } from "../api/api";
import { useState } from "react";
import ConfirmModal from "./ConfirmModal";
import useDate from "../hooks/useDate";

export default function Board({ board }: { board: BoardModel }) {
  const { todayDone, good, notGood, username, userId, boardId } = board;
  const { user } = useAuthState();
  const { date } = useDate();
  const isMine = user?.uid === userId;

  const {
    mutate: removeBoard,
    isLoading,
    isSuccess,
  } = useMutation(deleteBoard);
  const handleTrashClick = () => {
    if (!isMine) return;
    removeBoard({ userId, boardId, date });
  };

  return (
    <>
      <section className="flex flex-col text-slate-700 bg-secondary rounded-lg py-2 px-2">
        <div className="px-1 py-1 flex flex-col items-center gap-2">
          <PiNotepadDuotone className="text-4xl" />
          <p className="text-xl italic">{todayDone}</p>
        </div>
        <div className="py-1 px-1">
          <p>👍 {good}</p>
          <p>😭 {notGood}</p>
        </div>
        <div className="flex justify-between pt-2 px-2 ">
          <button onClick={handleTrashClick}>
            <FaRegTrashAlt className={`${isMine ? "visible" : "hidden"}`} />
          </button>
          <p className="italic">{`by. ${username}`}</p>
        </div>
      </section>
    </>
  );
}
