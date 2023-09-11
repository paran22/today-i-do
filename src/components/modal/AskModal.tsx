import { useRef, useEffect } from "react";

interface ModalProps {
  title: string;
  visible: boolean;
  setVisible: (visible: boolean) => void;
  onConfirmClick?: () => void;
}

export default function AskModal({
  visible,
  title,
  setVisible,
  onConfirmClick = () => {},
}: ModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (visible) {
      dialogRef.current?.showModal();
    }
  }, [visible]);
  const handleCancle = () => {
    setVisible(false);
  };
  const handleConfirm = () => {
    dialogRef.current?.close();
    setVisible(false);
    onConfirmClick();
  };
  return (
    <>
      {visible && (
        <dialog
          className="pt-8 pb-6 w-60 text-gray-900 bg-secondary rounded-lg flex flex-col items-center justify-center gap-3 text-base px-3 text-center"
          ref={dialogRef}
        >
          <p>{title}</p>
          <div className="flex gap-4">
            <button
              className="border-2 border-dotted border-background text-background rounded-lg px-4 py-1 text-sm mt-2"
              onClick={handleCancle}
            >
              취소
            </button>
            <button
              className="bg-background text-textColor rounded-lg px-4 py-1 text-sm mt-2"
              onClick={handleConfirm}
            >
              확인
            </button>
          </div>
        </dialog>
      )}
    </>
  );
}
