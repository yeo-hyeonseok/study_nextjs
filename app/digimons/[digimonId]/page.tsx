import Image from "next/image";
import { getDigimon } from "@/lib/digimonApi";

interface Props {
  params: Promise<{ digimonId: string }>;
}

export default async function DigimonDetail({ params }: Props) {
  const { digimonId } = await params;
  const res = await getDigimon(digimonId);

  const commonStyles =
    "border-2 border-primary-lighter bg-primary rounded-lg px-2 py-1";

  return (
    <div className="text-neutral bg-primary-light lg:w-2/3 h-2/3 flex gap-2.5 p-2.5 shadow-lg mx-4">
      <div className="w-1/2 relative overflow-hidden">
        <Image
          src={res?.image ?? ""}
          alt={res?.name ?? ""}
          fill={true}
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="flex-1 flex flex-col gap-2.5">
        <div className={`${commonStyles}`}>
          <label className="text-xl">No.{res?.id}</label>
          <h3 className="text-3xl">{res?.name}</h3>
        </div>
        <div className={`${commonStyles}`}>
          <span className="text-xl">{res?.level}</span>
          <p className="text-xl">Type: {res?.type}</p>
        </div>
        <p className={`${commonStyles} text-lg overflow-y-auto flex-1`}>
          {res?.description}
        </p>
      </div>
    </div>
  );
}
