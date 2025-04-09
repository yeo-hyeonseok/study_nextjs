import Button from "@/components/Button";
import TextInput from "@/components/TextInput";

export default function Register() {
  return (
    <div className="h-[100dvh] flex flex-col justify-center gap-6 items-center">
      <form className="flex flex-col items-center gap-4" method="post">
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
