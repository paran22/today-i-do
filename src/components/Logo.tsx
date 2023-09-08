import { PiNotepadDuotone } from "react-icons/pi";
import useRoute from "../hooks/useRoute";

export default function Logo() {
  const { navigateToHome } = useRoute();
  return (
    <button
      className="flex text-primary gap-2 text-4xl font-bold items-center"
      onClick={navigateToHome}
    >
      <PiNotepadDuotone />
      <p className="hidden sm:block">Today-I-Do</p>
    </button>
  );
}
