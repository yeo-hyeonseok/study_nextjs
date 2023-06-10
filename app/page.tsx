export default function Home() {
  const author = "wilddev_seok";
  const link = "https://github.com/yeo-hyeonseok";

  return (
    <div className="flex items-center justify-center h-screen flex-col">
      <h1 className="text-stone-100 text-5xl font-bold">NEFRESH</h1>
      <a href={link} className="text-stone-100 mt-1">
        by {author}
      </a>
    </div>
  );
}
