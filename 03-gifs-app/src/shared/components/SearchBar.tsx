// snippet: rafc
import { useEffect, useState, type KeyboardEvent } from "react";

interface Props {
  placeholder?: string;
  onQuery: (query: string) => void;
}

export const SearchBar = ({ placeholder = "Buscar", onQuery }: Props) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    // // console.log("Hola desde el efecto");
    // onQuery(query);

    const timeoutId = setTimeout(() => {
      onQuery(query);
    }, 700);

    return () => {
      // console.log("Función de limpieza");
      clearTimeout(timeoutId);
    };
  }, [query, onQuery]);

  const handleSearch = () => {
    onQuery(query);
    setQuery("");
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="search-container">
      {/* <h1>{query}</h1> */}
      <input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        // onKeyDown={(event) => {
        //   if (event.key === "Enter") {
        //     handleSearch();
        //   }
        // }}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
};
