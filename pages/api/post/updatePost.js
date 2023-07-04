import { connectDB } from "@/util/db";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  const db = (await connectDB).db("forum");

  // 게시글 수정
  if (req.method === "POST") {
    if (req.body.title === "" || req.body.content == "") {
      return res.status(500).json("제목이나 내용 입력 해주셈");
    }

    try {
      const collection = await db.collection("post");

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
    } catch (error) {
      console.log(error);
    }
  }
}
