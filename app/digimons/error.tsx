// error.tsx 파일은 클라이언트 단의 에러도 감지해야 하기 때문에 client 컴포넌트로 작성해야 함
"use client";

export default function Error({
  error,
}: {
  // digest는 에러를 추적하기 위한 nextjs에서 제공하는 고유 식별자임
  error: Error & { digest?: string };
}) {
  return <h2 className="text-4xl text-error">{error.message}</h2>;
}
