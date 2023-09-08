import { PiNotepadDuotone } from "react-icons/pi";
import useRoute from "../hooks/useRoute";
import useScroll from "../hooks/useScroll";

export default function Logo() {
  const { isScroll } = useScroll();
  const { navigateToHome } = useRoute();
  const textColor = isScroll ? "text-white" : "text-primary";
  return (
    <button
      className={`flex ${textColor} gap-2 text-4xl font-bold items-center`}
      onClick={() => navigateToHome()}
    >
      <PiNotepadDuotone />
      <p className="hidden sm:block">Today-I-Do</p>
    </button>
  );
}
