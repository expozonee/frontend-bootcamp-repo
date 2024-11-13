// import { useEffect, useState } from "react";
import "./App.css";
// import Spinner from "./components/Spinner/Spinner";
// import Timer from "./components/Timer/Timer";
import ColorBox from "./components/ColorBox/ColorBox";
// import BoxAnimation from "./components/BoxAnimation";
// import FavoriteColor from "./components/FavoriteColor";

function App() {
  // const [isTimerFinished, setIsTimerFinished] = useState(false);

  // const SPINNERS = ["spinner", "dots-scale", "dots-blink"];

  return (
    <>
      {/* <FavoriteColor /> */}
      {/* <BoxAnimation /> */}
      {/* <Timer seconds={10} updateTimerStatus={setIsTimerFinished} />
      <Spinner
        done={isTimerFinished}
        type={SPINNERS[Math.floor(Math.random() * SPINNERS.length)]}
      /> */}
      <ColorBox />
    </>
  );
}

export default App;
