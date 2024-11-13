import { useState } from "react";
import Timer from "../Timer/Timer";
import Spinner from "../Spinner/Spinner";

export default function TimerContainer() {
  const [isTimerFinished, setIsTimerFinished] = useState(false);

  const SPINNERS = ["spinner", "dots-scale", "dots-blink"];

  return (
    <>
      <Timer seconds={10} updateTimerStatus={setIsTimerFinished} />
      <Spinner
        done={isTimerFinished}
        type={SPINNERS[Math.floor(Math.random() * SPINNERS.length)]}
      />
    </>
  );
}
