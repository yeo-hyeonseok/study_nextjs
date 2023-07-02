import { connectDB } from "@/util/db";

export default async function handler(req, res) {
  const db = (await connectDB).db("forum");

  // 성공 시엔 200, 실패 시엔 500, 유저 잘못을 실패 시엔 400
  if (req.method === "GET") {
    const date = new Date();
    const response = `지금은 ${date.getFullYear()}년 ${
      date.getMonth() + 1
    }월 ${date.getDate()}일 ${date.getHours()}시 ${date.getMinutes()}분`;

    return res.status(200).json(response);
  }

  // 게시글 작성 캐싱 관련 테스트
  if (req.method === "POST") {
    if (req.body.title === "" || req.body.content == "") {
      return res.status(500).json("제목이나 내용 입력 해주셈");
    }

    try {
      const collection = await db.collection("post");
      collection.insertOne(req.body);

      return res.redirect(302, "/list");
    } catch (error) {
      console.log(error);
    }
  }
}
