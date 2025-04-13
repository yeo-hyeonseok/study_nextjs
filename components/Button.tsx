"use client";

import { MouseEventHandler } from "react";

interface Props {
  className?: string;
  type?: "button" | "submit" | "reset";
  label: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export default function Button({
  className,
  type = "submit",
  label,
  onClick,
}: Props) {
  return (
    <button
      className={`${className} bg-secondary py-2 px-4 text-xl cursor-pointer`}
      type={type}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
