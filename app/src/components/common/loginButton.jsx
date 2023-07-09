"use client";

import { signIn } from "next-auth/react";
import SuperButton from "../common/superButton";

export default async function LoginButton({ className }) {
  return (
    <SuperButton
      text="로그인 하기"
      onClick={() => {
        signIn("", { callbackUrl: "/posts" });
      }}
      className={className}
    />
  );
}
