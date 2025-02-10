export default function ButtonTab({ onClick, activeTab, option, name }) {
  return (
    <button
      className={`px-4 py-2 w-1/2 text-center font-semibold ${
        activeTab === option
          ? 'border-b-2 border-blue-600 text-blue-600'
          : 'text-gray-600'
      }`}
      onClick={onClick}
    >
      {name}
    </button>
  );
}
