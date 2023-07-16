"use client";

import { ChangeEvent, useState } from "react";
import SuperButton from "../common/superButton";

interface CommentInputProps {
  postId: string;
}

export default function CommentInput({ postId }: CommentInputProps) {
  const [input, setInput] = useState("");

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <div className="border border-stone-100 p-2 flex justify-between">
      <input
        type="text"
        className="flex-1 mr-2 p-2"
        value={input}
        onChange={onInputChange}
        required
      />
      <SuperButton
        text="댓글쓰기"
        onClick={() => {
          fetch("/api/comment/createComment", {
            method: "POST",
            body: JSON.stringify({
              postId: postId,
              comment: input,
            }),
          });
        }}
      />
    </div>
  );
}
