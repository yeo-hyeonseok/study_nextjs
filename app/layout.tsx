import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import Navigation from "./src/components/common/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "STUDY_NEXT13",
  description: "next13 & tailwind & 배포 연습하기",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-goku`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
