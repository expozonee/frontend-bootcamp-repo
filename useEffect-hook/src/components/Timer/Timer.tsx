import { useEffect, useState } from "react";

type TimerProps = {
  seconds: number;
  updateTimerStatus: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Timer({ updateTimerStatus, seconds }: TimerProps) {
  const [time, setTime] = useState(seconds);

  useEffect(() => {
    if (time === 0) {
      updateTimerStatus(true);

      return () => {
        clearInterval(id);
      };
    }

    const id = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(id);
  }, [time, updateTimerStatus]);

  return (
    <div>
      <h1>{time}</h1>
    </div>
  );
}
