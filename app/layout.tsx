import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  // - title 속성을 객체 타입으로 지정해서 템플릿 형태로 만들 수도 있음
  // - '%s'에 하위 경로의 title이 들어감
  title: {
    template: "DIGI-DICT | %s",
    default: "DIGI-DICT",
  },
  description: "디지몬 정보를 열람할 수 있는 사이트예요.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-primary text-neutral h-[100dvh]">
        <Header className="fixed z-50" />
        {children}
      </body>
    </html>
  );
}
