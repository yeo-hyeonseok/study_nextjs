import SuperButton from "../common/superButton";

interface GetPostFormProps {
  className?: string;
}

export default function GetPostForm({ className }: GetPostFormProps) {
  return (
    <form
      action="/api/post/getPost"
      method="GET"
      className={`border-2 border-stone-100 flex items-center p-2 justify-between ${className}`}
    >
      <p className="text-stone-100">게시글 목록 불러오기</p>
      <SuperButton type="submit" text="눌러보셈" />
    </form>
  );
}
