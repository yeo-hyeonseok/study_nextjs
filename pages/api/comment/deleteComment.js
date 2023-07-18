import { connectDB } from "@/util/db";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function Handler(req, res) {
  const db = (await connectDB).db("forum");
  const session = await getServerSession(req, res, authOptions);

  if (req.method === "POST") {
    try {
      const parse = JSON.parse(req.body);

      const collection = await db.collection("comment");

      const comment = await collection.findOne({
        _id: new ObjectId(parse.commentId),
      });

      if (
        session &&
        (session.user.email === comment.authorId ||
          session.user.role === "admin")
      ) {
        const result = await collection.deleteOne({
          _id: new ObjectId(parse.commentId),
        });

        if (result.deletedCount === 0) {
          return res.status(500);
        }

        const comments = await db
          .collection("comment")
          .find({ postId: new ObjectId(parse.postId) })
          .toArray();

        return res.status(200).json(comments);
      } else {
        return res.status(500).json("님은 삭제할 수 없음");
      }
    } catch (error) {
      console.log(error);
    }
  }
}
