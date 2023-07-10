import { connectDB } from "@/util/db";
import bcrypt from "bcrypt";

export default async function handler(req, res) {
  const db = (await connectDB).db("forum");

  if (req.method === "POST") {
    if (
      req.body.username === "" ||
      req.body.email === "" ||
      req.body.password === ""
    ) {
      return res.status(500).json("정보 똑바로 입력해주셈");
    }
    try {
      const hash = await bcrypt.hash(req.body.password, 10);
      const collection = await db.collection("user");

      const temp = await collection.findOne({ email: req.body.email });

      if (temp !== null) {
        return res.status(500).json("이미 가입된 이메일임");
      }

      collection.insertOne({ ...req.body, password: hash, role: "normal" });
      return res.status(200).json("회원가입함");
    } catch (error) {
      console.log(error);
    }
  }
}
