import { connectDB } from "@/util/db";

export default async function Home() {
  // 아래와 같은 민감한 코드들은 서버 컴포넌트에서만 사용하는게 좋음
  const db = (await connectDB).db("forum");
  const posts = await db.collection("post").find().toArray();

  return (
    <div className="flex items-center h-screen flex-col">
      <div className="w-1/3 mt-5">
        {posts.map((post, index) => (
          <div key={post._id} className="mt-6">
            <div className="text-stone-100 text-xl font-semibold border border-slate-100 p-2">
              TITLE: {post.title}
            </div>
            <p className="text-stone-100 text-lg border border-slate-100 p-2">
              {post.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
