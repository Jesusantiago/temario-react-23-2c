import React, { useState } from "react";

const Contador = () => {
  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    setCount(count + 1)
    console.log(count);
  };
  const handleDecrement = () => {
    setCount(count - 1)
  };

  return (
    <div>
      <button onClick={handleIncrement}>+</button>
      <h1>{count}</h1>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
};

export default Contador;
