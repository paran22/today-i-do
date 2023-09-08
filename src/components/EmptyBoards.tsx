import { AiTwotoneNotification } from "react-icons/ai";

export default function EmptyBoards() {
  return (
    <div className="flex flex-col items-center gap-4 pt-36">
      <AiTwotoneNotification className="text-6xl" />
      <p className="text-3xl font-bold">작성된 글이 없습니다.</p>
    </div>
  );
}
