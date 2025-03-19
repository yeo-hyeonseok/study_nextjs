"use client";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  return <h2 className="text-red-500">😭 {error.message}</h2>;
}
