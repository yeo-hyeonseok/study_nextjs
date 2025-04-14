import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

interface User {
  id?: string;
  email?: string;
  password?: string;
}

// handlers: '/api/auth/[...nextauth]/route.ts'에 쓰이는 라우트 핸들러
// signIn: 클라이언트에서 로그인 시 사용하는 함수
// signOut: 클라이언트에서 로그아웃 시 사용하는 함수
// auth: 서버 컴포넌트나 미들웨어에서 세션 정보를 가져오는 함수
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      // credentials 파라미터는 signIn 함수의 두번째 인자로 전달한 데이터임
      authorize: async (credentials) => {
        const { id, email } = credentials as User;

        try {
          if (email) {
            //  ---- 회원가입 시 로직 ----
            return {
              id,
              email,
            };
          }

          // ---- 로그인 시 로직 -----
          return { id, email };
        } catch (error) {
          if (error instanceof Error) throw new Error(error.message);

          throw new Error("인증 오류 발생");
        }
      },
    }),
  ],
  // callbacks 속성을 통해서 인증 흐름을 커스터마이징할 수 있음
  callbacks: {
    // 로그인 시 동작 순서: authorized => jwt => session
    // 인증된 사용자인지 아닌지 판별
    authorized: async ({ auth }) => {
      return !!auth;
    },
    // email외의 데이터를 세션에 포함시키고 싶다면 아래와 같이 하면 됨
    session: async ({ session, token }) => {
      session.user.id = token.id as string;

      return session;
    },
    jwt: async ({ token, user, trigger, session }) => {
      // user는 로그인 시 존재하는 데이터로 로그인된 사용자 정보를 담고 있음
      if (user) {
        token.id = user.id;
      }

      // 클라이언트에서 update 함수를 호출할 때 'update' trigger가 발생
      // session은 update 함수의 인자로 전달한 사용자 정의 세션 정보
      if (trigger === "update" && session) {
        token.id = session.user.id;
        token.email = session.user.email;

        return token;
      }

      return token;
    },
  },
  trustHost: true,
});
