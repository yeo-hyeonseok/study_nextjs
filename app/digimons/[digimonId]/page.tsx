import Image from "next/image";

interface Props {
  className?: string;
  params: Promise<{ digimonId: string }>;
}

export default async function DigimonDetail({ className, params }: Props) {
  const { digimonId } = await params;

  const res = await fetch(`https://digi-api.com/api/v1/digimon/${digimonId}`);

  const { id, name, images, levels, types, descriptions } = await res.json();

  const commonStyles =
    "border-2 border-primary-lighter bg-primary rounded-lg px-2 py-1";

  return (
    <div
      className={`${className} text-neutral bg-primary-light lg:w-2/3 h-2/3 flex gap-2.5 p-3.5`}
    >
      <div className="w-1/2 relative overflow-hidden">
        <Image
          src={images[0].href}
          alt={images[0].href}
          fill={true}
          objectFit="cover"
        />
      </div>
      <div className="flex-1 flex flex-col gap-2.5">
        <div className={`${commonStyles}`}>
          <label className="text-xl">No.{id}</label>
          <h3 className="text-3xl">{name}</h3>
        </div>
        <div className={`${commonStyles}`}>
          <span className="text-xl">{levels[0]?.level ?? "UNKNOWN"}</span>
          <p className="text-xl">Types: {types[0]?.type ?? "UNKNOWN"}</p>
        </div>
        <p className={`${commonStyles} text-lg overflow-y-auto flex-1`}>
          {descriptions[1]?.description ?? "UNKNOWN"}{" "}
        </p>
      </div>
    </div>
  );
}
