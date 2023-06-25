import { connectDB } from "@/util/db";
import PostItem from "./src/components/main/postItem";

export default async function Home() {
  // 아래와 같은 민감한 코드들은 서버 컴포넌트에서만 사용하는게 좋음
  const db = (await connectDB).db("forum");
  const posts = await db.collection("post").find().toArray();

  return (
    <div className="flex items-center flex-col">
      <div className="w-1/3 mt-5">
        {posts.map((post, _) => (
          <PostItem
            key={post._id}
            postId={post._id.toString()}
            title={post.title}
            content={post.content}
          />
        ))}
      </div>
    </div>
  );
}
