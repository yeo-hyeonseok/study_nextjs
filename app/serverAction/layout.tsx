export default function DigimonsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <section className="h-[100dvh] bg-[url('/images/grid.png')] bg-cover flex justify-center items-center">
      {children}
    </section>
  );
}
