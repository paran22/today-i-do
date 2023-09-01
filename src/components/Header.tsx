import Logo from "./Logo";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <header className="flex px-2 py-2 justify-between items-end">
      <Logo />
      <NavBar />
    </header>
  );
}
