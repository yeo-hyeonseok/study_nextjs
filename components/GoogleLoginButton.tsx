import Image from "next/image";
import { signInWithGoogle } from "@/serverActions/auth";

interface Props {
  className?: string;
}

export default function GoogleLoginButton({ className }: Props) {
  return (
    <form
      className={`${className} flex gap-3.5 py-2.5 px-3.5 cursor-pointer rounded-full bg-neutral`}
      action={signInWithGoogle}
    >
      <Image
        src="/images/google_logo.png"
        width={28}
        height={28}
        alt="google"
      />
      <button className="text-gray-800 text-lg cursor-pointer">
        Sign in with Google
      </button>
    </form>
  );
}
