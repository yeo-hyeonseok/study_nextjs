"use server";

import { auth, signIn, signOut } from "@/auth";

export const signInWithCredentials = async (formData: FormData) => {
  await signIn("credentials", {
    id: formData.get("id") || "",
    email: formData.get("email") || "",
    password: formData.get("password") || "",
    redirectTo: "/",
  });
};

export const signOutWithForm = async () => {
  await signOut({
    // 로그아웃 시 리다이렉트 할 경로도 설정할 수 있는데 기본 설정은 "/"임
    // redirectTo: "/login",
  });
};

export { auth as getSession };
