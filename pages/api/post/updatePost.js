import { connectDB } from "@/util/db";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
  const db = (await connectDB).db("forum");
  const session = await getServerSession(req, res, authOptions);

  // 게시글 수정
  if (req.method === "POST") {
    if (req.body.title === "" || req.body.content == "") {
      return res.status(500).json("제목이나 내용 입력 해주셈");
    }

    try {
      const collection = await db.collection("post");
      const post = await collection.findOne({
        _id: new ObjectId(req.query.id),
      });

      if (
        session &&
        (session.user.email === post.author || session.user.role === "admin")
      ) {
        collection.updateOne(
          {
            _id: new ObjectId(req.query.id),
          },
          {
            $set: {
              title: req.body.title,
              content: req.body.content,
            },
          }
        );

        return res.redirect(302, "/posts");
      } else {
        return res.status(500).json("님은 수정할 수 없음");
      }
    } catch (error) {
      console.log(error);
    }
  }
}
