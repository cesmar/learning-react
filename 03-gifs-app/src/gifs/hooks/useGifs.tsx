import { useRef, useState } from "react";
import { getGifsByQuery } from "../actions/get-gifs-by-query.action";
import type { Gif } from "../interfaces/gif.interface";

// const gifsCache: Record<string, Gif[]> = {};

export const useGifs = () => {
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [previousTerms, setpreviousTerms] = useState<string[]>([]); //"dragon ball z", "goku"

  //   const gifsCache: Record<string, Gif[]> = {};
  const gifsCache = useRef<Record<string, Gif[]>>({});

  const handleTermClicked = async (term: string) => {
    // if (gifsCache[term]) {
    //   setGifs(gifsCache[term]);
    //   return;
    // }
    if (gifsCache.current) {
      setGifs(gifsCache.current[term]);
      return;
    }
    // const gifs = await getGifsByQuery(term);
    // setGifs(gifs);
  };

  const handleSearch = async (query: string = "") => {
    query = query.toLowerCase().trim();

    if (query.length === 0) return;
    if (previousTerms.includes(query)) return;

    setpreviousTerms([query, ...previousTerms].splice(0, 8));

    const gifs = await getGifsByQuery(query);
    setGifs(gifs);

    // gifsCache[query] = gifs;
    gifsCache.current[query] = gifs;
    console.log({ gifsCache });
  };

  return {
    //Properties
    gifs,
    previousTerms,
    //Methods / Actions
    handleSearch,
    handleTermClicked,
  };
};
