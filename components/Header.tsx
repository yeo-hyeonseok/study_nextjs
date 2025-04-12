import Link from "next/link";
import { getSession, signOutWithForm } from "@/serverActions/auth";

interface Props {
  className?: string;
}

const links = [
  {
    href: "/",
    label: "HOME",
  },
  {
    href: "/digimons",
    label: "DIGIMONS",
  },
];

export default async function Header({ className }: Props) {
  const session = await getSession();

  return (
    <header
      className={`${className} flex justify-between shadow-md md:px-6 px-4 py-4 w-full bg-primary-dark`}
    >
      <Link className="text-2xl cursor-pointer" href="/">
        DIGI-DICT
      </Link>
      <nav className="flex gap-12 text-2xl items-center">
        {links.map(({ href, label }) => (
          <Link
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
        {session?.user ? (
          <>
            <Link href="/account">ACCOUNT</Link>
            <form action={signOutWithForm}>
              <button className="cursor-pointer text-2xl border-2 px-2.5 border-neutral rounded-sm">
                LOGOUT
              </button>
            </form>
          </>
        ) : (
          <Link
            className="text-2xl border-2 px-2.5 border-neutral rounded-sm"
            href="/login"
          >
            LOGIN
          </Link>
        )}
      </nav>
    </header>
  );
}
