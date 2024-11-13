import "./App.css";
import ColorBox from "./components/ColorBox/ColorBox";
import TimerContainer from "./components/TimerContainer/TimerContainer";
import BoxAnimation from "./components/BoxAnimation";
import FavoriteColor from "./components/FavoriteColor";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <FavoriteColor />
      <BoxAnimation />
      <TimerContainer />
      <ColorBox />
    </div>
  );
}

export default App;
