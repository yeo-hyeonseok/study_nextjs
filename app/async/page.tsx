import { wait } from "@/lib/utils";
import { Suspense } from "react";
import Loader from "@/components/Loader";
import A from "./A";
import B from "./B";

export default async function Page() {
  await wait(1000);

  return (
    <div className="flex flex-col gap-4 items-center justify-center h-screen">
      <h1 className="text-xl">비동기 페이지</h1>
      {/*
        기본적으로 비동기 컴포넌트는 내부의 모든 컴포넌트가 렌더링 될때까지 대기하지만
        <Suspense> 태그를 사용하면 내부의 컴포넌트가 렌더링 되는대로 나타나게 됨
      */}
      <Suspense fallback={<Loader color="red" />}>
        <A />
      </Suspense>
      <Suspense fallback={<Loader color="yellow" />}>
        <B />
      </Suspense>
    </div>
  );
}
