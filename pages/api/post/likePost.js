import { connectDB } from "@/util/db";
import { getServerSession } from "next-auth";
import { ObjectId } from "mongodb";
import { authOptions } from "../auth/[...nextauth]";

export default async function LikePost(req, res) {
  const db = (await connectDB).db("forum");
  const session = await getServerSession(req, res, authOptions);

  if (req.method === "GET") {
    try {
      const collection = await db.collection("post");
      const post = await collection.findOne({
        _id: new ObjectId(req.query.postId),
      });

      res.status(200).json({ likes: post.likes });
    } catch (error) {
      console.log(error);
    }
  }

  if (req.method === "POST") {
    try {
      const collection = await db.collection("post");
      const post = await collection.findOne({
        _id: new ObjectId(req.body),
      });

      if (session && !post.likeUsers.includes(session.user.email)) {
        collection.updateOne(
          {
            _id: new ObjectId(req.body),
          },
          {
            $set: {
              likes: post.likes + 1,
              likeUsers: [...post.likeUsers, session.user.email],
            },
          }
        );

        return res.status(200).json({ likes: post.likes + 1 });
      }
      return res.status(500).json({ msg: "님은 좋아요 누를 수 없음" });
    } catch (error) {
      console.log(error);
    }
  }
}
