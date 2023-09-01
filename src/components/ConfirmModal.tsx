import { useRef, useEffect } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

interface ModalProps {
  title: string;
  showModal: boolean;
  setShowModal: (show: boolean) => void;
  onClose: () => void;
}

export default function ConfirmModal({
  showModal,
  setShowModal,
  title,
  onClose,
}: ModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  console.log(showModal);
  useEffect(() => {
    if (showModal) {
      dialogRef.current?.showModal();
    }
  }, [showModal]);
  const onConfirmClick = () => {
    dialogRef.current?.close();
    setShowModal(false);
    onClose();
  };
  const onCloseClick = () => {
    dialogRef.current?.close();
    setShowModal(false);
  };

  return (
    <dialog
      className="pt-5 pb-6 w-60 text-gray-900 bg-secondary rounded-lg flex flex-col items-center justify-center gap-3 text-base px-3 text-center"
      ref={dialogRef}
    >
      <div className="w-full flex justify-end text-xl px-4">
        <AiOutlineCloseCircle className="" onClick={onCloseClick} />
      </div>
      <p>{title}</p>
      <button
        className="bg-background text-textColor rounded-lg px-4 py-1 text-sm mt-2"
        onClick={onConfirmClick}
      >
        확인
      </button>
    </dialog>
  );
}
