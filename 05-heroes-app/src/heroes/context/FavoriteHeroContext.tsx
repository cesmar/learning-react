import {
  createContext,
  useEffect,
  useState,
  type PropsWithChildren,
} from "react";
import type { Hero } from "../pages/types/hero.interface";

interface FavoriteHeroContext {
  // State
  favorites: Hero[];
  favoriteCount: number;
  // Methods
  isFavorite: (hero: Hero) => boolean;
  toggleFavorite: (hero: Hero) => void;
}

export const FavoriteHeroContext = createContext({} as FavoriteHeroContext);

export const FavoriteHeroProvider = ({ children }: PropsWithChildren) => {
  const getFavoritesFromLocalStorage = (): Hero[] => {
    // debugger;
    const favorites = localStorage.getItem("favorites");
    return favorites ? JSON.parse(favorites) : [];
  };

  const [favorites, setFavorites] = useState<Hero[]>(
    getFavoritesFromLocalStorage(),
  );

  const toggleFavorite = (hero: Hero) => {
    const heroExist = favorites.find((h: Hero) => h.id === hero.id);

    if (heroExist) {
      const newFavorites = favorites.filter((h: Hero) => h.id !== hero.id);
      setFavorites(newFavorites);
      return;
    }
    setFavorites([...favorites, hero]);
  };

  const isFavorite = (hero: Hero) => {
    return favorites.some((h) => h.id == hero.id);
  };

  useEffect(() => {
    // debugger;
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <FavoriteHeroContext
      value={{
        // State
        favorites: favorites,
        favoriteCount: favorites.length,
        // Methods
        isFavorite: isFavorite,
        toggleFavorite: toggleFavorite,
      }}
    >
      {children}
    </FavoriteHeroContext>
  );
};
