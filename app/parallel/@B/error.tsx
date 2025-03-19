"use client";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  return <h2 className="text-yellow-500">😭 {error.message}</h2>;
}
