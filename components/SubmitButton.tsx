"use client";

import { MouseEventHandler } from "react";
import { useFormStatus } from "react-dom";

interface Props {
  className?: string;
  label: string;
  loadingMsg: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export default function SubmitButton({
  className,
  label,
  loadingMsg,
  onClick,
}: Props) {
  // useFormStatus 훅을 통해서 form 안의 서버액션의 진행 상태를 추적할 수 있음
  // form 내부에서만 사용 가능한 훅임
  const { pending } = useFormStatus();

  return (
    <button
      className={`${className} bg-secondary py-2 px-4 text-xl cursor-pointer`}
      onClick={onClick}
    >
      {pending ? loadingMsg : label}
    </button>
  );
}
