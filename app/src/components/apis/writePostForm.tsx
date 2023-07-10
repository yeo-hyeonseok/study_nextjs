import SuperButton from "../common/superButton";

interface WritePostFormProps {
  className?: string;
}

export default function WritePostForm({ className }: WritePostFormProps) {
  return (
    <form
      action="/api/post/createPost"
      method="POST"
      className={`border-2 border-stone-100 p-2 ${className}`}
    >
      <div className="flex">
        <label className="text-stone-100 mr-2">TITLE:</label>
        <input name="title" type="text" className="w-full pl-1 pr-1" required />
      </div>
      <div className="mt-3">
        <label className="text-stone-100">CONTENT</label>
        <textarea
          name="content"
          rows={3}
          className="w-full mt-1 pl-1 pr-1"
          required
        />
      </div>
      <div className="flex justify-end mt-3">
        <SuperButton type="submit" text="눌러보셈" />
      </div>
    </form>
  );
}
