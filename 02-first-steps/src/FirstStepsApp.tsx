import { ItemCounter } from "./shopping-cart/ItemCounter";

interface ItemInCart {
  productName: string;
  quantity: number;
}

const itemsInCart: ItemInCart[] = [
  { productName: "Nintendo Switch 2", quantity: 1 },
  { productName: "Pro Controller", quantity: 2 },
  { productName: "Super Smash", quantity: 5 },
];

export function FirstStepsApp() {
  return (
    <>
      <h3>Hola Mundo!</h3>
      {/* <p>Esto es un párrafo!!</p>

      <button>Click me</button>

      <div>
        <h2>Hola dentro de un div</h2>
      </div> */}

      <h1>Carritos de compras</h1>
      {/* <ItemCounter name="Nintendo Switch 2" quantity={1} />
      <ItemCounter name="Pro Controller" quantity={2} />
      <ItemCounter name="Super Smash" quantity={3} />
      <ItemCounter name="Super Mario" quantity={3} /> */}
      {itemsInCart.map(({ productName, quantity }) => (
        <ItemCounter key={productName} name={productName} quantity={quantity} />
      ))}
    </>
  );
}
