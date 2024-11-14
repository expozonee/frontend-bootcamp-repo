import "./App.css";
import List from "./components/List/LIst";
import { usePlaces } from "./providers/PlacesProvider";

function App() {
  const { useLarge } = usePlaces();
  const { isLarge, setIsLarge } = useLarge();

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={isLarge}
          onChange={(e) => {
            setIsLarge(e.target.checked);
          }}
        />
        Use large images
      </label>
      <hr />
      <List />
    </>
  );
}

export default App;
