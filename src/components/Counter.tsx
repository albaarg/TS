import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const increase = (num: number = 1): void => {
    setCount(count + num);
  };
  return (
    <div>
      <h3>counter</h3>
      <span>Value: {count}</span>
      <br />
      <button
        onClick={() => increase()}
        className="btn btn-outline-primary mt-2"
      >
        +1
      </button>

      <button
        onClick={() => setCount(0)}
        className="btn btn-outline-danger mt-2"
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
