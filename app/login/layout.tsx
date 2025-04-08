import { Suspense } from "react";

export default function LoginLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // useSearchParams 훅을 사용하는 컴포넌트는 비동기로 로드되기 때문에 준비가 채 안된 상태로 로드되는 것을 방지하기 위해서 Suspense가 필요
  return <Suspense>{children}</Suspense>;
}
