import { useRef, useEffect, useState } from "react";

type TimerArgs = {
  ms: number;
};
const Timers = ({ ms }: TimerArgs) => {
  const [seconds, setSeconds] = useState(0);
  const ref = useRef<NodeJS.Timeout>();

  useEffect(() => {
    ref.current && clearInterval(ref.current);
    ref.current = setInterval(() => setSeconds((s) => s + 1), ms);
  }, [ms]);
  return (
    <>
      <h4>
        {" "}
        Timer:<small>{seconds}</small>
      </h4>
    </>
  );
};

export default Timers;
