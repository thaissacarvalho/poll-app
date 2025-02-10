import React from "react";

interface InputOptionsProps {
  key: number;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputOption({
  key,
  placeholder,
  value,
  onChange,
}: InputOptionsProps) {
  return (
    <input
      key={key}
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required
      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
  );
}
