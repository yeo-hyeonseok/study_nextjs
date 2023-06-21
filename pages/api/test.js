export default function handler(req, res) {
  // 성공 시엔 200, 실패 시엔 500, 유저 잘못을 실패 시엔 400
  if (req.method === "GET") {
    const date = new Date();
    const response = `지금은 ${date.getFullYear()}년 ${
      date.getMonth() + 1
    }월 ${date.getDate()}일 ${date.getHours()}시 ${date.getMinutes()}분`;

    return res.status(200).json(response);
  }
}
