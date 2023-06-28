import { connectDB } from "@/util/db";
import { ObjectId } from "mongodb";
import SuperButton from "@/app/src/components/common/superButton";
import SuperTextField from "@/app/src/components/common/superTextField";
import SuperTextArea from "@/app/src/components/common/superTextArea";

export default async function Detail(props) {
  const db = (await connectDB).db("forum");
  const post = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) });

  return (
    <div className="flex justify-center">
      <form
        action={`/api/post/updatePost/?id=${post._id.toString()}`}
        method="POST"
        className="border-2 border-stone-100 p-2 mt-5 w-1/4"
      >
        <div className="flex">
          <label className="text-stone-100 mr-2">TITLE:</label>
          <SuperTextField name="title" value={post.title} required={true} />
        </div>
        <div className="mt-3">
          <label className="text-stone-100">CONTENT</label>
          <SuperTextArea
            name="content"
            rows={3}
            className="mt-1"
            value={post.content}
            required={true}
          />
        </div>
        <div className="flex justify-end mt-3">
          <SuperButton type="submit" text="수정완료" />
        </div>
      </form>
    </div>
  );
}
