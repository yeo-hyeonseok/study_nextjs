"use client";

import { signOut } from "next-auth/react";
import SuperButton from "./superButton";

export default async function LogoutButton({ className }) {
  return (
    <SuperButton
      text="로그아웃"
      onClick={() => {
        signOut("", { callbackUrl: "/" });
      }}
      className={className}
    />
  );
}
