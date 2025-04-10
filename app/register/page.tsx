import Button from "@/components/Button";
import TextInput from "@/components/TextInput";
import { signInWithCredentials } from "@/serverActions/auth";

export default function Register() {
  return (
    <div className="h-[100dvh] flex flex-col justify-center gap-6 items-center">
      <form
        className="flex flex-col items-center gap-4"
        action={signInWithCredentials}
      >
        <div className="flex flex-col gap-2">
          <TextInput name="id" placeholder="Id" />
          <TextInput name="email" placeholder="Email" />
          <TextInput name="password" placeholder="Password" />
        </div>
        <Button label="Register" />
      </form>
    </div>
  );
}
