import { wait } from "@/lib/utils";

export default async function Page() {
  await wait(3000);
  //throw new Error("B 컴포넌트 에러");

  return <div className="text-yellow-500">B 컴포넌트</div>;
}
