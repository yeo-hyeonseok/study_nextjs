"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
//import { useEffect } from "react";

interface Props {
  className?: string;
}

const links = [
  {
    href: "/",
    label: "홈",
  },
  {
    href: "/digimons",
    label: "디지몬 목록",
  },
];

export default function Header(props: Props) {
  const { className } = props;

  const pathname = usePathname();
  const router = useRouter();

  // 프로그래밍 방식의 탐색에서는 다음과 같이 미리 가져오기 구현 가능
  /* useEffect(() => {
    router.prefetch("/digimons");
  }, [router]); */

  return (
    <header className={`${className} flex justify-between md:px-6 px-4 py-4`}>
      <h1 className="text-xl cursor-pointer" onClick={() => router.push("/")}>
        디지몬 도감
      </h1>
      <nav className="flex gap-12 text-xl">
        {links.map(({ href, label }) => (
          <Link
            className={`${pathname === href && "text-secondary"}`}
            key={label}
            // 해당 링크의 페이지의 데이터를 미리 가져올 지 여부를 설정
            // 뷰포트 안에 들어오거나 마우스로 호버하는 경우 해당 페이지의 정적 데이터를 미리 로드함
            // 해당 기능은 production 모드에서만 동작함
            // - null(기본값): 정적 경로일 경우에는 모든 하위 경로를, 동적 경로일 경우에는 loading.tsx 파일이 있는 가장 가까운 세그먼트까지만
            // - true: 정적 경로와 동적 경로 모두 미리 가져옴
            // - false: 미리 가져오기 x
            prefetch={true}
            href={href}
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
