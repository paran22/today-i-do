import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { bodyElementState } from "../state/bodyElementState";

export default function useScroll() {
  const [bodyElement, setBodyElement] = useRecoilState(bodyElementState);
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    if (!bodyElement) return;
    const scrollEvent = "scroll";
    const yScrollEvent = () => {
      if (!bodyElement) return;
      const y = bodyElement.getBoundingClientRect().top;
      setIsScroll(y < 0);
    };
    window.addEventListener(scrollEvent, yScrollEvent);
    return () => {
      window.removeEventListener(scrollEvent, yScrollEvent);
    };
  }, [bodyElement]);

  return { setBodyElement, isScroll };
}
