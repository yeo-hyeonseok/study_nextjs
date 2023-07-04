import { connectDB } from "@/util/db";
import PostItem from "../src/components/main/postItem";

// 이러면 이 페이지는 dynamic rendering으로 보여지게 됨, 참고로 여기서 dynamic은 예약어임
export const dynamic = "force-dynamic";

// 얘는 당연 static으로
//export const dynamic = 'force-static';

export default async function Posts() {
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
