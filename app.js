import React, { useState } from "react";
import Button from "./components/Button";
import "./assets/css/style.css";

export default function App() {
  const [count, setCount] = useState(0);

  let incrementCount = () => {
    setCount(count + 1);
  };

  let decrementCount = () => {
    setCount(count - 1);
    if(count<0)
    alert("I urge you  to increase the count as it should be positive");
  };

  return (
    <div className="app">
      <div>
        <div class="count">
          <h2>COUNT:</h2>
          <h1>{count}</h1>
        </div>
        <div class="buttons">
          <Button title={"-"} action={decrementCount} />
          <Button title={count} action={count}/>
          <Button title={"+"} action={incrementCount} />
        </div>
      </div>
    </div>
  );
}
