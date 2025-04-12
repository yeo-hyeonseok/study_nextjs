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
    redirectTo: "/",
  });
};

export { auth as getSession };
