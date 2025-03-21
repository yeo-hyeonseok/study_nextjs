/*
    라우트 핸들러
    - 'app/api' 폴더를 통해서 api 엔드 포인트를 정의할 수 있음
    - GET이나 POST 등의 HTTP 메서드 요청을 처리 가능
    - 주로 api 키를 숨겨야 하거나 인증 기능을 구현하는 등 민감한 로직을 처리하는 데 사용
*/

import { NextRequest, NextResponse } from "next/server";

type Context = {
  params: {
    digimonId: string;
  };
};

export async function GET(_: NextRequest, context: Context) {
  const { digimonId } = await context.params;

  try {
    const res = await fetch(`https://digi-api.com/api/v1/digimon/${digimonId}`);

    if (!res.ok) throw new Error("[getDigimon] 디지몬 정보 불러오기 실패");

    const data = await res.json();

    return NextResponse.json({
      id: data.id,
      name: data.name,
      image: data.images[0]?.href,
      level: data.levels[0]?.level ?? "UNKNOWN",
      type: data.types[0]?.type ?? "UNKNOWN",
      description: data.descriptions[1]?.description ?? "UNKNOWN",
    });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
