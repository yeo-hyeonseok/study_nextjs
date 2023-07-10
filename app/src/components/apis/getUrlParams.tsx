"use client";

import SuperButton from "../common/superButton";

interface GetUrlParamsProps {
  className?: string;
}

export default function GetUrlParams({ className }: GetUrlParamsProps) {
  return (
    <div
      className={`border-2 border-stone-100 flex items-center p-2 justify-between ${className}`}
    >
      <p className="text-stone-100">URL 파라미터</p>
      {/* 쿼리 뿐만 아니라 url 파라미터로도 서버에게 데이터 전송 가능 */}
      <SuperButton
        text="눌러보셈"
        onClick={() => {
          fetch("/api/testing/방가");
        }}
      />
    </div>
  );
}
