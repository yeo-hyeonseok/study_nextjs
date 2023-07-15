import { connectDB } from "@/util/db";
import { ObjectId } from "mongodb";

export default async function Handler(req, res) {
  const db = (await connectDB).db("forum");

  if (req.method === "POST") {
    console.log(req.body);

    if (req.body.author === null) {
      return res.status(500).json("로그인 해주셈");
    }

    if (req.body.comment === "") {
      return res.status(500).json("내용을 입력해주셈");
    }

    try {
      const collection = await db.collection("comment");
      collection.insertOne({
        ...JSON.parse(req.body),
        postId: new ObjectId(req.body.postId),
      });

      return res.redirect(302, "/posts");
    } catch (error) {
      console.log(error);
    }
  }
}
