interface ButtonProps {
  icon?: React.ReactElement;
  name: string;
  onClick: () => void;
}

export default function Button({ icon, name, onClick }: ButtonProps) {
  return (
    <button
      className="flex items-center px-10 py-2 gap-2 border-2 rounded-lg border-primary font-semibold text-lg hover:bg-primary hover:text-white"
      onClick={onClick}
    >
      {icon}
      {name}
    </button>
  );
}
