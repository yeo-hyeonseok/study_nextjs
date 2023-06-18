import { connectDB } from "@/util/db";
import { ObjectId } from "mongodb";

export default async function Detail(props) {
  const db = (await connectDB).db("forum");
  const post = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) });

  return (
    <div>
      <h2 className="text-stone-100">{post.title}</h2>
    </div>
  );
}
