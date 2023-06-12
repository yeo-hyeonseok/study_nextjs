"use client";

interface SuperButtonProps {
  text: string;
  onClick: VoidFunction;
}

export default function SuperButton({ text, onClick }: SuperButtonProps) {
  return (
    <button
      className="text-lg font-semibold bg-orange-400 text-white pt-1 pb-1 pl-2 pr-2 rounded"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
