import { connectDB } from "@/util/db";

export default async function handler(req, res) {
  const db = (await connectDB).db("forum");

  if (req.method === "POST") {
    if (
      req.body.username === "" ||
      req.body.userId === "" ||
      req.body.password === ""
    ) {
      return res.status(500).json("정보 똑바로 입력해주셈");
    }
    try {
      const collection = await db.collection("user");
      collection.insertOne(req.body);

      return res.status(200).json("회원가입함");
    } catch (error) {
      console.log(error);
    }
  }
}
