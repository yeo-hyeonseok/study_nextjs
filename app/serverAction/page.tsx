"use client";

import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import { getRandomNum } from "@/lib/utils";

export default function Digimons() {
  const router = useRouter();

  return (
    <div>
      <Button
        label="Get Random Digimon!(server action)"
        onClick={() => router.push(`/serverAction/${getRandomNum(1460)}`)}
      />
    </div>
  );
}
