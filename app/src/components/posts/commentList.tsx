import CommentInput from "./commentInput";

interface CommentListProps {
  postId: string;
}

export default function CommentList({ postId }: CommentListProps) {
  return (
    <div className="border border-stone-100 ">
      <div className="text-stone-100 p-2">댓글 목록</div>
      <CommentInput postId={postId} />
    </div>
  );
}
