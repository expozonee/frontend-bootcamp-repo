import "./App.css";
import ApiBlock from "./components/ApiBlock/ApiBlock";

function App() {
  return (
    <main className="container">
      <article>
        <ApiBlock
          headingText="Ninja Api Result"
          color="darkblue"
          url="https://catfact.ninja/fact"
        />
        <ApiBlock
          headingText="Programming joke Api Result"
          color="limegreen"
          url="https://v2.jokeapi.dev/joke/Programming?type=twopart"
          programming
        />
        <ApiBlock
          headingText="Dogs images Api Result"
          color="purple"
          url="https://dog.ceo/api/breeds/image/random"
          imageWithMsg
        />
        <ApiBlock
          headingText="Bear images Api Result"
          color="firebrick"
          url="https://placebear.com/200/300"
          image
        />
      </article>
    </main>
  );
}

export default App;
