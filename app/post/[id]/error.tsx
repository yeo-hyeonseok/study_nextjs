// error 페이지는 무조건 client 컴포넌트로 만들어줘야 함
// props.error => 에러 정보
// props.reset => 해당 페이지 리렌더링 (다시 시도), 일시적인 에러일 경우에 효력이 있을 듯
// 에러가 발생한 페이지 근처에 error.js가 없다면 상위 폴더들을 뒤져보고 그걸로 대체
// => app 폴더에 만들어놔도 보여줌
// => 다만, 형제로 있는 layout.js의 에러는 체크 못함, global-error.js 만들거나 더 상위의 폴더 이용해야 함

"use client";

import SuperButton from "@/app/src/components/common/superButton";
import { useEffect } from "react";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.log(error);
  });

  return (
    <div className="flex items-center justify-center h-screen flex-col">
      <h1 className="text-stone-100 text-2xl">잠시 오류가 발생함</h1>
      <SuperButton className="mt-5" text="다시 시도" onClick={() => reset()} />
    </div>
  );
}
