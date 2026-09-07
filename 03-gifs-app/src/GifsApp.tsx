import { GifList } from "./gifs/components/GifList";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { mockGifs, type Gif } from "./mock-data/gifs.mock";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";

export const GifsApp = () => {
  return (
    <>
      {/* Header */}
      {/* <div className="content-center">
        <h1>Buscador de Gifs</h1>
        <p>Descubre y comparte el gif perfecto</p>
      </div> */}
      <CustomHeader
        title="Buscador de Gifs"
        description="Descubre y comparte el gif perfecto"
      />

      {/* Search */}
      {/* <div className="search-container">
        <input type="text" placeholder="Buscar gifs" />
        <button>Buscar</button>
      </div> */}
      <SearchBar placeholder="Busca lo que quieras" />

      {/* Búsquedas previas */}
      {/* <div className="previous-searches">
        <h2>Búsquedas previas</h2>
        <ul className="previous-searches-list">
          <li>Goku</li>
          <li>Saitama</li>
          <li>Elder Ring</li>
        </ul>
      </div> */}
      <PreviousSearches searches={['Goku', 'Dragon Ball Z', 'Luffy']} />

      {/* Gifs */}
      {/* <div className="gifs-container">
        {mockGifs.map((gif: Gif) => (
          <div key={gif.id} className="gif-card">
            <img src={gif.url} alt={gif.title} />
            <h3>{gif.title}</h3>
            <p>
              {gif.width}x{gif.height} (1.5mb)
            </p>
          </div>
        ))}
      </div> */}
      <GifList gifs={mockGifs} />
    </>
  );
};
