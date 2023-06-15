import { connectDB } from "@/util/db";

export default async function Home() {
  const author = "wilddev_seok";
  const link = "https://github.com/yeo-hyeonseok";

  // 아래와 같은 민감한 코드들은 서버 컴포넌트에서만 사용하는게 좋음
  const db = (await connectDB).db("forum");
  const posts = await db.collection("post").find().toArray();

  console.log(posts);

  return (
    <div className="flex items-center justify-center h-screen flex-col">
      <h1 className="text-stone-100 text-5xl font-bold">NEFRESH</h1>
      <a href={link} className="text-stone-100 mt-1">
        by {author}
      </a>
      <div></div>
    </div>
  );
}
