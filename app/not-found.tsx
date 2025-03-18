import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl text-accent">404 NOT FOUND</h1>
      <Link className="underline text-2xl mt-2" href="/">
        Go to Home
      </Link>
    </div>
  );
}
