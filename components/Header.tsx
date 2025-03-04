"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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

  return (
    <header className={`${className} flex justify-between md:px-6 px-4 py-4`}>
      <Link className="text-xl" href="/">
        디지몬 도감
      </Link>
      <nav className="flex gap-12 text-xl">
        {links.map(({ href, label }) => (
          <Link
            className={`${pathname === href && "text-secondary"}`}
            key={label}
            href={href}
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
