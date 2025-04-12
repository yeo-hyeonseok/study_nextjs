"use client";

import { useEffect, useState } from "react";
import { signInWithCredentials } from "@/serverActions/auth";
import Button from "@/components/Button";
import TextInput from "@/components/TextInput";
import { getSession } from "next-auth/react";

export default function Account() {
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "id") {
      setId(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  useEffect(() => {
    const fetchSession = async () => {
      const user = (await getSession())?.user;

      if (user) {
        setId(user.id ?? "");
        setEmail(user.email ?? "");
      }
    };
    fetchSession();
  }, []);

  return (
    <div className="h-[100dvh] flex flex-col justify-center gap-6 items-center">
      <form
        className="flex flex-col items-center gap-8"
        action={signInWithCredentials}
      >
        <div className="flex flex-col gap-2">
          <h2 className="text-center text-2xl mb-2">Account</h2>
          <TextInput
            name="id"
            placeholder="Id"
            onChange={handelChange}
            value={id}
          />
          <TextInput
            name="email"
            placeholder="Email"
            onChange={handelChange}
            value={email}
          />
          <TextInput
            name="password"
            placeholder="Password"
            onChange={handelChange}
            value={password}
          />
        </div>
        <Button label="Update" />
      </form>
    </div>
  );
}
