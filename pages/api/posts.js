import { connectDB } from "@/util/db";

export default async function handler(req, res) {
  const db = (await connectDB).db("forum");

  // 게시글 조회
  if (req.method === "GET") {
    try {
      const posts = await db.collection("post").find().toArray();

      return res.status(200).json(posts);
    } catch (error) {
      console.log(error);
    }
  }

  // 게시글 작성
  if (req.method === "POST") {
    if (req.body.title === "" || req.body.content == "") {
      return res.status(500).json("제목이나 내용 입력 해주셈");
    }

    try {
      const collection = await db.collection("post");
      collection.insertOne(req.body);

      return res.redirect(302, "/");
    } catch (error) {
      console.log(error);
    }
  }
}
