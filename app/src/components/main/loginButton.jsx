"use client";

import { signIn } from "next-auth/react";
import SuperButton from "../common/superButton";

export default async function LoginButton({ className }) {
  return (
    <SuperButton
      text="Github로 로그인하기"
      onClick={() => {
        signIn("", { callbackUrl: "/posts" });
      }}
      className={className}
    />
  );
}
