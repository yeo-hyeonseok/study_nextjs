import { wait } from "@/lib/utils";

export default async function B() {
  await wait(3000);

  return <h2 className="text-yellow-500">B 컴포넌트</h2>;
}
