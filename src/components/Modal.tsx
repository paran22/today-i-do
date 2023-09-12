interface ModalProps {
  title: string;
  visible: boolean;
  setVisible: (visible: boolean) => void;
  onConfirmClick?: () => void;
  onCancelClick?: () => void;
  isCancelButton?: boolean;
}

export default function Modal({
  visible,
  title,
  setVisible,
  onConfirmClick = () => {},
  onCancelClick = () => {},
  isCancelButton = false,
}: ModalProps) {
  const handleConfirm = () => {
    setVisible(false);
    onConfirmClick();
  };
  const handleCancle = () => {
    setVisible(false);
    onCancelClick();
  };
  return (
    <>
      {visible && (
        <div className="absolute top-0 w-screen h-screen flex justify-center bg-zinc-400/20 z-10">
          <div className="pt-8 pb-6 w-60 text-gray-900 bg-secondary rounded-lg flex flex-col items-center justify-center gap-3 text-base px-3 text-center absolute top-32 opacity-100">
            <p>{title}</p>
            <div className="flex gap-4">
              {isCancelButton && (
                <button
                  className="border-2 border-dotted border-background text-background rounded-lg px-4 py-1 text-sm mt-2"
                  onClick={handleCancle}
                >
                  취소
                </button>
              )}
              <button
                className="bg-background text-textColor rounded-lg px-4 py-1 text-sm mt-2"
                onClick={handleConfirm}
              >
                확인
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
