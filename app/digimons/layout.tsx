export default function MoviesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <section className="px-6 h-[100dvh] flex justify-center items-center">
      {children}
    </section>
  );
}
