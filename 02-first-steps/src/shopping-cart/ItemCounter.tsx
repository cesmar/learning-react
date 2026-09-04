import { useState } from "react";

// import "./ItemCounter.css";
import styles from "./ItemCounter.module.css";

interface Props {
  name: string;
  quantity?: number;
}

export const ItemCounter = ({ name, quantity = 1 }: Props) => {
  const [count, setCount] = useState(quantity);

  const handleAdd = () => {
    setCount(count + 1);
  };
  const handleSubstract = () => {
    if (count === 1) return;
    setCount(count - 1);
  };

  const handleClick = () => {
    console.log(`Click en ${name}`);
  };

  return (
    <section
      //   className="item-row"
      className={styles.itemRow}
      //   style={{
      //     display: "flex",
      //     alignItems: "center",
      //     gap: 10,
      //     marginTop: 10,
      //   }}
    >
      <span
        // className="item-text"
        className={styles['item-text']}
        style={{
          //   width: 150,
          color: count === 1 ? "red" : "black",
        }}
      >
        {name}
      </span>
      <button
        // onMouseEnter={() => {
        //   console.log(`Mouse enter ${name}`);
        // }}
        // onClick={() => {
        //   console.log(`Click ${name} en +`);
        // }}
        // onClick={() => {
        //   handleClick();
        // }}
        // onClick={handleClick}
        onClick={handleAdd}
      >
        +1
      </button>
      <span>{count}</span>
      <button onClick={handleSubstract}>-1</button>
    </section>
  );
};
