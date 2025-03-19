/*
  @ 접두사의 폴더는 url 경로에 영향을 주지 않음
  - 여러 페이지나 컴포넌트를 병렬로 처리할 수 있어서 전체 로딩 시간을 단축시킬 수 있음
  - Suspense 컴포넌트를 사용했을 때와 동일하게 동작하지만 각 페이지 또는 컴포넌트마다 독자적인 로딩과 에러 처리를 할 수 있음
*/

export default function Layout({
  children,
  A,
  B,
}: {
  children: React.ReactNode;
  A: React.ReactNode;
  B: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4 items-center justify-center h-screen">
      {children}
      {A}
      {B}
    </div>
  );
}
