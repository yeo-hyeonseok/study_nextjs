"use client";

interface SuperButtonProps {
  className?: string;
  type?: "button" | "submit" | "reset";
  text: string;
  onClick?: VoidFunction;
}

export default function SuperButton({
  className,
  type,
  text,
  onClick,
}: SuperButtonProps) {
  return (
    <button
      className={`text-md font-semibold text-white pt-1 pb-1 pl-2 pr-2 border-2 border-stone-100 ${className}`}
      type={type ?? "button"}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
