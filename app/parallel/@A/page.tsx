import { wait } from "@/lib/utils";

export default async function Page() {
  await wait(2000);

  return <div className="text-red-500">A 컴포넌트</div>;
}
