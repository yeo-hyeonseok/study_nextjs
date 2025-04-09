"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Button from "@/components/Button";
import TextInput from "@/components/TextInput";

export default function Login() {
  const params = useSearchParams();
  const [message, setMessage] = useState("");

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
      <form className="flex gap-2" method="post">
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
