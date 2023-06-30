import { connectDB } from "@/util/db";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  const db = (await connectDB).db("forum");

  if (req.method === "POST") {
    try {
      const collection = await db.collection("post");
      const result = await collection.deleteOne({
        _id: new ObjectId(req.body),
      });

      // collection에서 document 삭제 시 수행 결과도 반환해줌
      if (result.deletedCount === 0) {
        return res.status(500);
      }

      return res.status(200).json("석제");
      //return res.redirect(302, "/");
    } catch (error) {
      console.log(error);
    }
  }
}
