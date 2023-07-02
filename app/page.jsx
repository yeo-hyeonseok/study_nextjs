import { connectDB } from "@/util/db";
import PostItem from "./src/components/main/postItem";

/*
<Static rendering>
nextjs에서 기본적인 렌더링 방식임
빌드 당시의 정적인 html 페이지를 유저에게 보여주는 거임
(미리 만들어서 보여주는 거)
유저가 페이지에 들어갈 때마다 페이지를 새로 그리지 않고 미리 만들어 놓은 것을 보여주기 때문에 속도가 빠름

<Dynamic rendering>
ajax 문법이나 dynamic route 같은 거 쓰면 자동으로 빌드 시 Dynamic rendering으로 페이지를 보여줌.
유저가 페이지에 들어갈 때마다 새로 html 페이지를 그려서 보여주는 거임. 
그래서 만약 유저가 많으면 서버나 DB에 부담이 갈 수 있음 => 서버 부담 덜어주려면 캐싱 기능 쓰셈
*/

// 이러면 이 페이지는 dynamic rendering으로 보여지게 됨, 참고로 여기서 dynamic은 예약어임
export const dynamic = "force-dynamic";

// 얘는 당연 static으로
//export const dynamic = 'force-static';

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
