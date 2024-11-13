import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Counter</h1>
      <div className="card">
        <button
          style={{
            backgroundColor: "firebrick",
            color: "white",
            padding: "1rem 2rem",
          }}
          onClick={() => setCount((count) => count + 1)}
        >
          Increment count
        </button>
        <p>count is {count}</p>
      </div>
    </>
  );
}

export default App;
