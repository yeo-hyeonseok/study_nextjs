"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import SuperButton from "../common/superButton";
import CommentList from "./commentList";

interface PostItemProps {
  id?: string;
  postId: string;
  title: string;
  content: string;
  isAuthor?: boolean;
}

export default function PostItem({
  id,
  postId,
  title,
  content,
  isAuthor,
}: PostItemProps) {
  const router = useRouter();

  const [deletedStyle, setDeletedStyle] = useState("opacity-100");

  const deletePost = () => {
    // 쿼리 쓰면 장점이 GET 요청할 때도 서버한테 데이터를 보낼 수 있음
    // 다만, 복잡하거나 민감한 데이터를 전송할 때는 사용하지 말 것 => 코드가 더러워보이거나 url에 노출됨
    fetch(`/api/post/deletePost?id=${postId}`, {
      method: "POST",
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
    <div id={id} className={`mt-6 transition-all duration-500 ${deletedStyle}`}>
      <div className="flex border border-stone-100 p-2 justify-between items-center">
        <p className="text-stone-100 text-xl font-semibold">TITLE: {title}</p>
        {isAuthor && (
          <div>
            <SuperButton
              text="수정"
              className="mr-2"
              onClick={() => {
                router.push(`/post/${postId}`);
              }}
            />
            <SuperButton
              text="삭제"
              onClick={() => {
                deletePost();
                setDeletedStyle("opacity-0");
                setTimeout(() => {
                  setDeletedStyle("hidden");
                }, 500);
              }}
            />
          </div>
        )}
      </div>
      <p className="text-stone-100 text-lg border border-stone-100 p-2">
        {content}
      </p>
      <CommentList postId={postId} />
    </div>
  );
}
