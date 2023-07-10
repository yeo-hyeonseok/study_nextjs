import SuperButton from "../common/superButton";

interface RegisterFormProps {
  className?: string;
}

export default function RegisterForm({ className }: RegisterFormProps) {
  return (
    <form
      action="/api/auth/register"
      method="POST"
      className={`border-2 border-stone-100 p-2 ${className}`}
    >
      <h2 className="text-stone-100">회원가입</h2>
      <input
        name="username"
        type="text"
        className="w-full pl-1 pr-1 mt-3"
        placeholder="USERNAME"
        required
      />
      <input
        name="email"
        type="text"
        className="w-full pl-1 pr-1 mt-3"
        placeholder="EMAIL"
        required
      />
      <input
        name="password"
        type="password"
        className="w-full pl-1 pr-1 mt-3"
        placeholder="PASSWORD"
        required
      />
      <div className="flex justify-end mt-3">
        <SuperButton type="submit" text="눌러보셈" />
      </div>
    </form>
  );
}
