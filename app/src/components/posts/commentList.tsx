import CommentInput from "./commentInput";

interface CommentListProps {
  postId: string;
  author?: string;
}

export default function CommentList({ postId, author }: CommentListProps) {
  return (
    <div className="border border-stone-100 ">
      <div className="text-stone-100 p-2">댓글 목록</div>
      <CommentInput postId={postId} author={author} />
    </div>
  );
}
