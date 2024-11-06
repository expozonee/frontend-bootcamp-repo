import "./App.css";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Services from "./components/Services/Services";
import Tours from "./components/Tours/Tours";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Services />
      <Tours />
      <Footer />
    </>
  );
}

export default App;
