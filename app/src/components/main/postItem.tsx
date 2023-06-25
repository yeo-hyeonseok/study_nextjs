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

  return (
    <div id={id} className="mt-6">
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
        <SuperButton text="삭제" onClick={() => {}} />
      </div>
    </div>
  );
}
