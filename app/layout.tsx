import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-zinc-900 border border-slate-100`}
      >
        <div className="flex justify-around">
          <Link
            href="/"
            className="text-xl text-slate-300 font-semibold border border-slate-100 flex-1 text-center pt-2 pb-2"
          >
            MAIN
          </Link>
          <Link
            href="/list"
            className="text-xl text-slate-300 font-semibold border border-slate-100 flex-1 text-center pt-2 pb-2"
          >
            POSTS
          </Link>
        </div>
        {children}
      </body>
    </html>
  );
}
