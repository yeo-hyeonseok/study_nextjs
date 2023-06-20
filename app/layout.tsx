import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";

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
        <div className="flex justify-around">
          <Link
            href="/"
            className="text-xl text-stone-100 font-semibold border border-stone-100 flex-1 text-center pt-2 pb-2"
          >
            POSTS
          </Link>
          <Link
            href="/products"
            className="text-xl text-stone-100 font-semibold border border-stone-100 flex-1 text-center pt-2 pb-2"
          >
            PRODUCTS
          </Link>
          <Link
            href="/routers"
            className="text-xl text-stone-100 font-semibold border border-stone-100 flex-1 text-center pt-2 pb-2"
          >
            ROUTERS
          </Link>
        </div>
        {children}
      </body>
    </html>
  );
}
