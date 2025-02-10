interface ButtonOptionProps {
  onClick: () => void;
}

export default function ButtonOption({ onClick }: ButtonOptionProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
    >
      Adicionar Opção
    </button>
  );
}
