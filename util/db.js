import { MongoClient } from "mongodb";

const url =
  "mongodb+srv://dugustlr:yhsluck124@cluster0.i8mufen.mongodb.net/?retryWrites=true&w=majority";
const options = { useNewUrlParser: true };
let connectDB;

// 개발환경일 때는 인스턴스 새로 생성하지 않고 재사용
if (process.env.NODE_ENV === "development") {
  if (!global._mongo) {
    global._mongo = new MongoClient(url, options).connect();
  }
  connectDB = global._mongo;
} else {
  connectDB = new MongoClient(url, options).connect();
}

export { connectDB };
