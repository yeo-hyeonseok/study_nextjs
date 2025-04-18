export default async function ErrorPage({
  searchParams,
}: {
  searchParams: Promise<{ message: string }>;
}) {
  const { message } = await searchParams;

  return (
    <div className="h-[100dvh] flex flex-col justify-center gap-2 items-center">
      <h1 className="text-3xl text-accent">ERROR</h1>
      <h2 className="text-2xl">{message}</h2>
    </div>
  );
}
