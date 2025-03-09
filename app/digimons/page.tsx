"use client";

import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import { getRandomNum } from "@/lib/utils";

export default function Digimons() {
  const router = useRouter();

  return (
    <div>
      <Button
        label="Get Random Digimon!"
        onClick={() => router.push(`/digimons/${getRandomNum(1460)}`)}
      />
    </div>
  );
}
