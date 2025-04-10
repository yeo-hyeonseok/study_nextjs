"use client";

import Image from "next/image";
import { Digimon, getDigimon } from "@/serverActions/digimon";
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
        {digimon && (
          <Image
            src={digimon.image}
            alt={digimon.name}
            fill={true}
            sizes="400"
            style={{ objectFit: "cover" }}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88B8AAqUB0Y/H4mkAAAAASUVORK5CYII="
            // Image 컴포넌트가 브라우저 상에서 렌더링 되었을 때 실행할 함수를 정의할 수 있음
            // onLoad 속성은 클라이언트 컴포넌트에서만 사용 가능
            onLoad={() => console.log("이미지 로드됨")}
          />
        )}
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
