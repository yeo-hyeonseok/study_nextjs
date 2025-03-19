import { wait } from "@/lib/utils";

export default async function Page() {
  await wait(1000);

  return (
    <div>
      <h1 className="text-xl">병렬 페이지</h1>
    </div>
  );
}
