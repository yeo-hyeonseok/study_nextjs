"use client";

import { useEffect, useState } from "react";
import Button from "@/components/Button";
import TextInput from "@/components/TextInput";
import { useSession } from "next-auth/react";
import { User } from "next-auth";
import { useRouter } from "next/navigation";

export default function Account() {
  const { data: session, update } = useSession();
  const router = useRouter();

  const [user, setUser] = useState<User>({
    id: "",
    email: "",
  });

  const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "id") {
      setUser((prev) => ({ ...prev, id: value }));
    }

    if (name === "email") {
      setUser((prev) => ({ ...prev, email: value }));
    }
  };

  const updateUser = async () => {
    await update({
      user: {
        id: user.id,
        email: user.email,
      },
    });
    router.push("/");
  };

  useEffect(() => {
    const user = session?.user;

    if (user) {
      setUser(user);
    }
  }, [session]);

  return (
    <div className="h-[100dvh] flex flex-col justify-center gap-6 items-center">
      <form className="flex flex-col items-center gap-8">
        <div className="flex flex-col gap-2">
          <h2 className="text-center text-2xl mb-2">Account</h2>
          <TextInput
            name="id"
            placeholder="Id"
            onChange={handelChange}
            value={user.id ?? ""}
          />
          <TextInput
            name="email"
            placeholder="Email"
            onChange={handelChange}
            value={user.email ?? ""}
          />
          <TextInput name="password" placeholder="Password" />
        </div>
        <Button type="button" onClick={updateUser} label="Update" />
      </form>
    </div>
  );
}
