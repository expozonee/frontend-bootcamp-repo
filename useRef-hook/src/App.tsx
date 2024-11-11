import "./App.css";
import Form from "./components/Form/Form";
import ImageToggle from "./components/ImageToggle/ImageToggle";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";

function App() {
  return (
    <>
      <VideoPlayer />
      <ImageToggle />
      <Form />
    </>
  );
}

export default App;
