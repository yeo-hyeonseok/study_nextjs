"use client";

import { MouseEventHandler } from "react";

interface Props {
  className?: string;
  label: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export default function Button({ className, label, onClick }: Props) {
  return (
    <button
      className={`${className} bg-secondary py-2 px-4 text-xl cursor-pointer`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
