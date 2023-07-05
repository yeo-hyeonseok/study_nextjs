import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: "",
      clientSecret: "",
    }),
  ],
  secret: "JWT 발금 시 사용할 암호",
};

export default NextAuth(authOptions);
