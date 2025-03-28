"use client";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  return (
    <h2 className="text-4xl text-center">
      <span className="text-error">[ERROR]</span>
      <p className="text-neutral">{error.message}</p>
    </h2>
  );
}
