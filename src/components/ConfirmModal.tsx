import { useRef, useEffect } from "react";

interface ModalProps {
  title: string;
  showModal: boolean;
  setShowModal: (show: boolean) => void;
}

export default function ConfirmModal({
  showModal,
  setShowModal,
  title,
}: ModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  console.log(showModal);
  useEffect(() => {
    console.log("before");
    if (showModal) {
      console.log("after");
      dialogRef.current?.showModal();
    }
  }, [showModal]);
  const onConfirmClick = () => {
    dialogRef.current?.close();
    setShowModal(false);
  };

  return (
    <dialog
      className="py-7 w-60 text-gray-900 bg-secondary rounded-lg flex flex-col items-center justify-center gap-4 text-base px-3 text-center"
      ref={dialogRef}
    >
      <div className="">
        <p>{title}</p>
      </div>
      <button
        className="bg-background text-textColor rounded-lg px-4 py-1 text-sm"
        onClick={onConfirmClick}
      >
        확인
      </button>
    </dialog>
  );
}
