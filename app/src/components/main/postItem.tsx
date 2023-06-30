"use client";
import { useRouter } from "next/navigation";
import SuperButton from "../common/superButton";

interface PostItemProps {
  id?: string;
  postId?: string;
  title: string;
  content: string;
}

export default function PostItem({
  id,
  postId,
  title,
  content,
}: PostItemProps) {
  const router = useRouter();

  const deletePost = () => {
    fetch(`/api/post/deletePost`, {
      method: "POST",
      body: postId,
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          // 서버가 에러 코드 전송 시 실행할 코드
        }
      })
      .then((res) => {
        // 최종적으로 성공 시 실행할 코드
        console.log(res);
      })
      .catch((error) => {
        // 네트워크 문제 등으로 실패 시 실행할 코드
        console.log(error);
      });
  };

  return (
    <div id={id} className="mt-6 opacity-100 transition-all duration-500">
      <p className="text-stone-100 text-xl font-semibold border border-stone-100 p-2 block">
        TITLE: {title}
      </p>
      <p className="text-stone-100 text-lg border border-stone-100 p-2">
        {content}
      </p>
      <div className="border border-stone-100 p-2 flex justify-end">
        <SuperButton
          text="수정"
          className="mr-2"
          onClick={() => {
            router.push(`/post/${postId}`);
          }}
        />
        <SuperButton text="삭제" onClick={() => deletePost()} />
      </div>
    </div>
  );
}
