import { useState } from "react";

export default function WelcomeWithButton() {
  const [clicked, setCLicked] = useState(false);
  return (
    <>
      <h1>Welcome to Our Page</h1>
      <button onClick={() => setCLicked(!clicked)}>Click Me</button>
      {clicked && <p id="message">Hello! You clicked the button!</p>}
    </>
  );
}
