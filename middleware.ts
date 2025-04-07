import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getRandomNum } from "./lib/utils";
import { auth } from "./auth";

// auth: auth.js v5에서 미들웨어 구현 시 기본 래퍼로 사용
export default auth(function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/digimons") return NextResponse.next();

  const digimonId = Number(
    request.nextUrl.pathname.match(/\/digimons\/(\d+)/)?.[1]
  );

  if (digimonId <= 0 || digimonId > 1460 || isNaN(digimonId)) {
    return NextResponse.redirect(
      new URL(`/digimons/${getRandomNum(1460)}`, request.url)
    );
  }
});

// matcher 속성에 지정해둔 경로일 경우에만 미들웨어가 실행됨
// config 생략 시 모든 경로에서 미들웨어 실행
export const config = {
  matcher: ["/digimons/:path*"],
};
