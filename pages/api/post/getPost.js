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
}
