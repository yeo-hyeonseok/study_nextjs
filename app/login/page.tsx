"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { signInWithCredentials } from "@/serverActions/auth";
import Button from "@/components/Button";
import TextInput from "@/components/TextInput";
import { useActionState } from "react";

export default function Login() {
  const params = useSearchParams();
  // 로그인 안 하고 디지몬 페이지 접속 시 나타낼 메시지
  const [message, setMessage] = useState("");
  // 로그인 관련 오류 발생 시 나타낼 메시지
  // useActionState 훅을 사용하면 서버 액션이 반환하는 결과값을 state처럼 사용할 수 있음
  // 두번째 인수는 state의 초기값임
  const [state, action] = useActionState(signInWithCredentials, {
    message: "",
  });

  // 주소창에 나타나는 url 정리 용도
  useEffect(() => {
    const msg = params.get("message");

    if (msg) {
      setMessage(msg);
      window.history.replaceState({}, "", window.location.pathname);
    }
  }, [params]);

  return (
    <div className="h-[100dvh] flex flex-col justify-center gap-6 items-center">
      {message && <h2 className="text-accent text-xl">{message}</h2>}
      {state.message && (
        <h2 className="text-accent text-xl">{state.message}</h2>
      )}
      <form className="flex gap-2" action={action}>
        <div className="flex flex-col gap-2">
          <TextInput name="id" placeholder="Id" />
          <TextInput name="password" placeholder="Password" />
        </div>
        <Button label="Login" />
      </form>
      <Link className="text-xl underline text-neutral" href="/register">
        Sign up
      </Link>
    </div>
  );
}
