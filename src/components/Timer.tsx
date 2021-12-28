import { useState } from "react";
import Timers from "./Timers";

const Timer = () => {
  const [milliseconds, setMilliseconds] = useState(1000);
  return (
    <>
      <span>Milliseconds{milliseconds}</span>
      <br />
      <button
        className="btn btn-outline-success"
        onClick={() => setMilliseconds(1000)}
      >
        1000
      </button>
      <button
        className="btn btn-outline-success"
        onClick={() => setMilliseconds(2000)}
      >
        2000
      </button>
      <Timers ms={milliseconds} />
    </>
  );
};

export default Timer;
