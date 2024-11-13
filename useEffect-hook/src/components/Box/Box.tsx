import "./Box.css";
import { useEffect, useState } from "react";

type BoxProps = {
  width: number;
  delay: number;
};

export default function Box({ width, delay }: BoxProps) {
  const [animationState, setAnimationState] = useState("");

  useEffect(() => {
    new Promise((resolve) => {
      setTimeout(() => {
        setAnimationState("slide-in");
        resolve(null);
      }, delay);
    }).then(() => {
      setTimeout(() => {
        setAnimationState("slide-out");
      }, 4000);
    });
  }, [delay]);

  return (
    <div
      style={{ width: width, height: width }}
      className={`box ${animationState}`}
    ></div>
  );
}
