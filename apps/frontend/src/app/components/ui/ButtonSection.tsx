interface ButtonSectionProps {
  onClick: () => void;
  name: string;
}

export default function ButtonSection({ onClick, name}: ButtonSectionProps) {
  const buttonStyle = "hover:text-blue-400 focus:text-blue-700"

  return (
    <li>
      <button
        className={buttonStyle}
        onClick={onClick}
      >
        {name}
      </button>
    </li>
  );
}
