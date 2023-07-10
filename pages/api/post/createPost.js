import { connectDB } from "@/util/db";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
  const db = (await connectDB).db("forum");
  const session = await getServerSession(req, res, authOptions);

  if (session) {
    req.body.author = session.user.email;
  }

  // 게시글 작성
  if (req.method === "POST") {
    if (req.body.title === "" || req.body.content == "") {
      return res.status(500).json("제목이나 내용 입력 해주셈");
    }

    try {
      const collection = await db.collection("post");
      collection.insertOne(req.body);

      return res.redirect(302, "/posts");
    } catch (error) {
      console.log(error);
    }
  }
}
