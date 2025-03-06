export default function MoviesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <section>
      <h1>디지몬 목록</h1>
      {children}
    </section>
  );
}
