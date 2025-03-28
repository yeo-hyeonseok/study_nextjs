"use client";

import Image from "next/image";
import { Digimon, getDigimon } from "@/serverActions";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ServerAction() {
  const { digimonId } = useParams();

  const [digimon, setDigimon] = useState<Digimon>();

  const commonStyles =
    "border-2 border-primary-lighter bg-primary rounded-lg px-2 py-1";

  useEffect(() => {
    const fetchDigimon = async () => {
      if (digimonId) {
        const res = await getDigimon(digimonId as string);

        setDigimon(res);
      }
    };

    fetchDigimon();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="text-neutral bg-primary-light lg:w-2/3 h-2/3 flex gap-2.5 p-2.5 shadow-lg mx-4">
      <div className="w-1/2 relative overflow-hidden">
        <Image
          src={digimon?.image ?? "/images/grid.png"}
          alt={digimon?.name ?? ""}
          fill={true}
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="flex-1 flex flex-col gap-2.5">
        <div className={`${commonStyles}`}>
          <label className="text-xl">No.{digimon?.id}</label>
          <h3 className="text-3xl">{digimon?.name}</h3>
        </div>
        <div className={`${commonStyles}`}>
          <span className="text-xl">{digimon?.level}</span>
          <p className="text-xl">Type: {digimon?.type}</p>
        </div>
        <p className={`${commonStyles} text-lg overflow-y-auto flex-1`}>
          {digimon?.description}
        </p>
      </div>
    </div>
  );
}
