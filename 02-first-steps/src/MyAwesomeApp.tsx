import type { CSSProperties } from "react";

const firstName = "Carlos";
const lastName = "Espino Maraví";

const favoriteGames: string[] = ["Elder Ring", "Smash", "Metal Gear"];
const isActive = true;

const address = {
  zipCode: "ABC-123",
  country: "Canadá",
};

const myStyles: CSSProperties = {
  backgroundColor: "#f0f0f0",
  borderRadius: 10,
  padding: 10,
  marginTop: 20,
};

export const MyAwesomeApp = () => {
  return (
    <div data-testid="div-app">
      <h1 data-testid="first-name-title"> {firstName} </h1>
      <h3> {lastName} </h3>

      <p>{2 + 2}</p>
      <p className="mi-clase-favorita">{favoriteGames.join(", ")}</p>

      <h1>{isActive ? "Activo" : "No activo"}</h1>

      <p style={myStyles}>{JSON.stringify(address)}</p>
    </div>
  );
};
