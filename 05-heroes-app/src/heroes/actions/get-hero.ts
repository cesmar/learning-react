import { heroApi } from "../api/hero.api";
import type { Hero } from "../pages/types/hero.interface";

const BASE_URL = import.meta.env.VITE_API_URL;

export const getHero = async (idSlung: string) => {
  const { data } = await heroApi.get<Hero>(`/${idSlung}`);

  return {
    ...data,
    image: `${BASE_URL}/images/${data.image}`,
  };
};
