"use client";
import { useState } from "react";
import CommentInput from "./commentInput";

interface CommentListProps {
  postId: string;
  comments: Array<{ _id: any; postId: any; comment: string; author: string }>;
}

export default function CommentList({ postId, comments }: CommentListProps) {
  const [isShow, setIsShow] = useState(false);

  const deleteComment = (id: string) => {
    fetch(`/api/comment/deleteComment?id=${id}`, {
      method: "POST",
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="border border-stone-100 ">
      <div>
        <div className="border border-stone-100 text-stone-100 p-2 flex justify-between">
          <p>댓글 목록</p>
          <button onClick={() => setIsShow(!isShow)}>
            {isShow ? "△" : "▽"}
          </button>
        </div>
        {isShow && (
          <div>
            {comments.length > 0 ? (
              comments.map((comment) => {
                return (
                  <div
                    key={comment._id.toString()}
                    className="flex justify-between text-stone-100 p-2 border border-stone-100"
                  >
                    <p className="flex-1">{comment.comment}</p>
                    <div>
                      <span className="mr-2">{comment.author}</span>
                      <button
                        onClick={() => deleteComment(comment._id.toString())}
                      >
                        X
                      </button>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="p-2 text-stone-100">댓글 없음</div>
            )}
          </div>
        )}
      </div>
      <CommentInput postId={postId} />
    </div>
  );
}
