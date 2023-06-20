"use client";

interface SuperButtonProps {
  className?: string;
  text: string;
  onClick: VoidFunction;
}

export default function SuperButton({
  className,
  text,
  onClick,
}: SuperButtonProps) {
  return (
    <button
      className={
        "text-lg font-semibold text-white pt-1 pb-1 pl-2 pr-2 border-2 border-stone-100" +
        className
      }
      onClick={onClick}
    >
      {text}
    </button>
  );
}
