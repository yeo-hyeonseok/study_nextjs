import Image from "next/image";
import { getDigimon } from "@/lib/api";

interface Props {
  params: Promise<{ digimonId: string }>;
}

export default async function DigimonDetail({ params }: Props) {
  const { digimonId } = await params;
  const digimon = await getDigimon(digimonId);

  const commonStyles =
    "border-2 border-primary-lighter bg-primary rounded-lg px-2 py-1";

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
