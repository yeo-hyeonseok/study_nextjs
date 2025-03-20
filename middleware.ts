import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getRandomNum } from "./lib/utils";

// 경로 이동 전에 서버에서 수행할 동작을 작성할 수 있음
// middleware 함수는 암묵적으로 NextResponse.next()를 반환함
// NextResponse.next()는 요청을 그대로 통과시켜 원래 요청된 페이지로 진행하도록 하는 메서드임
export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/digimons") return NextResponse.next();

  const digimonId = Number(
    request.nextUrl.pathname.match(/\/digimons\/(\d+)/)?.[1]
  );

  if (digimonId <= 0 || digimonId > 1460 || isNaN(digimonId)) {
    return NextResponse.redirect(
      new URL(`/digimons/${getRandomNum(1460)}`, request.url)
    );
  }
}

// matcher 속성에 지정해둔 경로일 경우에만 미들웨어가 실행됨
// config 생략 시 모든 경로에서 미들웨어 실행
export const config = {
  matcher: ["/digimons/:path*"],
};
