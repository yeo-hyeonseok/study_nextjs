import NextAuth from "next-auth";

// handlers: '/api/auth/[...nextauth]/route.ts'에 쓰이는 라우트 핸들러
// signIn: 클라이언트에서 로그인 시 사용하는 함수
// signOut: 클라이언트에서 로그아웃 시 사용하는 함수
// auth: 서버 컴포넌트나 미들웨어에서 세션 정보를 가져오는 함수
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [],
  // callbacks 속성을 통해서 인증 흐름을 커스터마이징할 수 있음
  callbacks: {
    // 인증된 사용자인지 아닌지 판별
    authorized: async ({ auth }) => {
      return !!auth;
    },
  },
  trustHost: true,
});
