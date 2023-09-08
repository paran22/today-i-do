import Logo from "./Logo";
import NavBar from "./NavBar";
import useScroll from "../hooks/useScroll";

export default function Header() {
  const { isScroll } = useScroll();
  const backgroundColor = isScroll ? "bg-primary" : "bg-background";
  return (
    <header
      className={`flex px-2 justify-between items-center fixed w-full h-12 ${backgroundColor} `}
    >
      <Logo />
      <NavBar />
    </header>
  );
}
