import { getSession } from "@/serverActions/auth";

export default async function Home() {
  const session = await getSession();

  return (
    <div className="text-neutral flex flex-col gap-2 justify-center items-center h-[100dvh]">
      <h1 className="text-xl">DIGI-DICTIONARY</h1>
      <p className="text-3xl">Welcome {session?.user?.id}</p>
    </div>
  );
}
