import SuperButton from "../common/superButton";

interface GetCurrentTimeFormProps {
  className?: string;
}

export default function GetCurrentTimeForm({
  className,
}: GetCurrentTimeFormProps) {
  return (
    <form
      action="/api/test"
      method="GET"
      className={`border-2 border-stone-100 flex items-center p-2 justify-between ${className}`}
    >
      <p className="text-stone-100">현재 시간은</p>
      <SuperButton type="submit" text="눌러보셈" />
    </form>
  );
}
