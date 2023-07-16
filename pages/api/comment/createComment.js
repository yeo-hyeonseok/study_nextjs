import { connectDB } from "@/util/db";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export default async function Handler(req, res) {
  const db = (await connectDB).db("forum");
  const session = await getServerSession(req, res, authOptions);

  if (req.method === "POST") {
    if (session === null) {
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
        author: session.user.email,
      });

      return res.status(200).json("댓글 작성됨");
    } catch (error) {
      console.log(error);
    }
  }
}
