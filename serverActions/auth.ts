"use server";

import { auth, signIn, signOut } from "@/auth";

export const signInWithCredentials = async (
  initialState: { message: string },
  formData: FormData
) => {
  try {
    await signIn("credentials", {
      id: formData.get("id") || "",
      email: formData.get("email") || "",
      password: formData.get("password") || "",
      redirect: false,
    });

    return { message: "success" };
  } catch (error) {
    if (error instanceof Error) {
      return { message: error.message };
    }

    return { message: "Login failed" };
  }
};

export const signOutWithForm = async () => {
  await signOut({
    redirectTo: "/",
  });
};

export { auth as getSession };
