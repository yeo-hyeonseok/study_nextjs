import { connectDB } from "@/util/db";
import { ObjectId } from "mongodb";

export default async function Handler(req, res) {
  const db = (await connectDB).db("forum");

  if (req.method === "GET") {
    try {
      const comments = await db
        .collection("comment")
        .find({ postId: new ObjectId(req.query.postId) })
        .toArray();

      return res.status(200).json(comments);
    } catch (error) {
      console.log(error);
    }
  }
}
