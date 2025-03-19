import { wait } from "@/lib/utils";

export default async function A() {
  await wait(2000);

  return <h2 className="text-red-500">A 컴포넌트</h2>;
}
