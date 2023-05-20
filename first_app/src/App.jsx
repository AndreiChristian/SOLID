import { createSignal } from "solid-js";
import styles from "./App.module.css";
import Navigation from "./Navigation";

function App() {
  const [count, setCount] = createSignal(0);



  const increment = () => {
    console.log("increment");
    setCount(count() + 1);
  };

  const decrement = () => {
    setCount(count() - 1);
  };



  return (
    <div class={styles.App}>
      <Navigation />
      <div className={styles.container}>
        <button onClick={decrement}>-</button>
        <h1>{count()}</h1>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
}

export default App;
