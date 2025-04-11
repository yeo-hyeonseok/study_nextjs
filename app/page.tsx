import { getSession } from "@/serverActions/auth";

export default async function Home() {
  const session = await getSession();
  const userId = session?.user?.id;

  return (
    <div className="text-neutral flex flex-col gap-2 justify-center items-center h-[100dvh]">
      <h1 className="text-xl">DIGI-DICTIONARY</h1>
      {userId && (
        <p className="text-3xl">
          Welcome <span className="text-accent">{userId}</span>
        </p>
      )}
    </div>
  );
}
