import { connectDB } from "@/util/db";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function Handler(req, res) {
  const db = (await connectDB).db("forum");
  const session = await getServerSession(req, res, authOptions);

  if (req.method === "POST") {
    try {
      const collection = await db.collection("comment");

      const comment = await collection.findOne({
        _id: new ObjectId(req.query.id),
      });

      if (
        session &&
        (session.user.email === comment.authorId ||
          session.user.role === "admin")
      ) {
        const result = await collection.deleteOne({
          _id: new ObjectId(req.query.id),
        });

        if (result.deletedCount === 0) {
          return res.status(500);
        }

        return res.status(200).json("삭제됨");
      } else {
        return res.status(500).json("님은 삭제할 수 없음");
      }
    } catch (error) {
      console.log(error);
    }
  }
}
