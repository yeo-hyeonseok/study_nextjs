import Button from "@/components/Button";

export default function Login() {
  return (
    <div className="h-[100dvh] flex flex-col justify-center gap-6 items-center">
      <form className="flex gap-2">
        <div className="flex flex-col gap-2">
          <input
            className="bg-primary-dark p-2 text-xl"
            type="text"
            name="id"
            placeholder="Id"
          />
          <input
            className="bg-primary-dark p-2 text-xl"
            type="text"
            name="password"
            placeholder="Password"
          />
        </div>
        <Button label="Login" />
      </form>
    </div>
  );
}
