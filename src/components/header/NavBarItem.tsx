interface NavItemProps {
  name: string;
  onClick: () => void;
}

export default function NavBarItem({
  name,
  onClick,
}: NavItemProps): React.ReactElement {
  return (
    <button className="text-2xl font-bold px-2" onClick={onClick}>
      {name}
    </button>
  );
}
