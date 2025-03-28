"use server";

export interface Digimon {
  id: number;
  name: string;
  image: string;
  level: string;
  type: string;
  description: string;
}

export const getDigimon = async (
  digimonId: string
): Promise<Digimon | undefined> => {
  try {
    console.log("[getDigimon] from serverActions");

    const res = await fetch(`https://digi-api.com/api/v1/digimon/${digimonId}`);

    if (!res.ok) throw new Error("[getDigimon] 디지몬 정보 불러오기 실패");

    const data = await res.json();

    return {
      id: data.id,
      name: data.name,
      image: data.images[0]?.href,
      level: data.levels[0]?.level ?? "UNKNOWN",
      type: data.types[0]?.type ?? "UNKNOWN",
      description: data.descriptions[1]?.description ?? "UNKNOWN",
    };
  } catch (error) {
    console.error("[getDigimon] ", error);
  }
};
