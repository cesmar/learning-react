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
    console.log('Hola mundo desde ItemCounter');
    setCount(count + 1);
  };
  const handleSubstract = () => {
    if (count === 1) return;
    setCount(count - 1);
  };

  return (
    <section
      //   className="item-row"
      className={styles.itemRow}
    >
      <span
        // className="item-text"
        className={styles["item-text"]}
        style={{
          color: count === 1 ? "red" : "black",
        }}
      >
        {name}
      </span>
      <button onClick={handleAdd}>+1</button>
      <span>{count}</span>
      <button onClick={handleSubstract}>-1</button>
    </section>
  );
};
