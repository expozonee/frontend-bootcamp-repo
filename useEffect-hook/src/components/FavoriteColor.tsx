import { useEffect, useState } from "react";

export default function FavoriteColor() {
  const [color, setColor] = useState("yellow");

  useEffect(() => {
    const id = setTimeout(() => {
      setColor("red");
    }, 1000);

    return () => clearTimeout(id);
  }, []);

  return (
    <div>
      <h1>My favorite color is {color}</h1>
    </div>
  );
}
