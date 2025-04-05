export default function DigimonsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <section className="h-[100dvh] flex justify-center flex-col items-center">
      {children}
    </section>
  );
}
