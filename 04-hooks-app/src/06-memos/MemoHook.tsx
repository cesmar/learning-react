import { useCallback, useState } from "react";
import { MyTitle } from "./ui/MyTitle";
import { MySubTitle } from "./ui/MySubTitle";

// const handleMyAPICall = (myValue: string) => {
//   console.log("Llamar a mi API - ", myValue);
// };

export const MemoHook = () => {
  const [title, setTitle] = useState("Hola");
  const [subtitle, setSubtitle] = useState("Mundo");

  const handleMyAPICall = useCallback(() => {
    console.log("Llamar a mi API - ", subtitle);
  }, [subtitle]);

  return (
    <div className="bg-gradient flex flex-col gap-4">
      <h1 className="text-2xl font-thin text-white">MemoApp</h1>

      {/* <h1>Mi Título</h1> */}
      {/* <MyTitle title="Mi Título re-render" /> */}
      <MyTitle title={title} />

      {/* <h6>Mi Subtítulo</h6> */}
      <MySubTitle subtitle={subtitle} callMyAPI={handleMyAPICall} />

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
        // onClick={() => setTitle("Hello")}
        onClick={() => setTitle("Hello, " + new Date().getTime())}
      >
        Cambiar título
      </button>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
        onClick={() => setSubtitle("World")}
        // onClick={() => setSubtitle("World, " + new Date().getTime())}
      >
        Cambiar subtítulo
      </button>
    </div>
  );
};
