import "./globals.css";
import { Inter } from "next/font/google";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import Navigation from "./src/components/common/navigation";
import LoginButton from "./src/components/common/loginButton";
import LogoutButton from "./src/components/common/logoutButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "STUDY_NEXT13",
  description: "next13 & tailwind & 배포 연습하기",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let session = await getServerSession(authOptions);

  console.log(session);

  return (
    <html lang="en">
      <body className={`${inter.className} bg-goku`}>
        <div className="p-2">
          {session !== null ? (
            <div className="flex justify-between">
              <div className="flex items-center">
                <Image
                  src={session?.user?.image ?? ""}
                  alt="프로필"
                  width={32}
                  height={32}
                  className="mr-2"
                />
                <span className="text-stone-100">{session?.user?.name}</span>
              </div>
              <LogoutButton className="" />
            </div>
          ) : (
            <div className="flex justify-end">
              <LoginButton className="" />
            </div>
          )}
        </div>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
