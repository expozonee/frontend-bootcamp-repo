import { useEffect, useState } from "react";
import "./ColorBox.css";

export default function ColorBox() {
  const [color, setColor] = useState("black");
  const [count, setCount] = useState(0);

  function generateRandomColor() {
    const letters = "0123456789ABCDEF";
    let newColor = "#";
    for (let i = 0; i < 6; i++) {
      newColor += letters[Math.floor(Math.random() * 16)];
    }
    return newColor;
  }

  useEffect(() => {
    const id = setInterval(() => {
      setColor(generateRandomColor());
      setCount((prev) => prev + 1);
    }, 1000);

    if (count === 5) {
      clearInterval(id);
    }

    return () => clearInterval(id);
  }, [count]);

  return (
    <div
      style={{
        backgroundColor: color,
        borderRadius: `${count === 5 ? "50%" : ""}`,
      }}
      className="color-box"
    />
  );
}
