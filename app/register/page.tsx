import RegisterForm from "../src/components/apis/registerForm";

export default async function Register() {
  return (
    <div className="flex items-center flex-col pt-8 pb-8">
      <div className="w-1/4">
        <RegisterForm />
      </div>
    </div>
  );
}
