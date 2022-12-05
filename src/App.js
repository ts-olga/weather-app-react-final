import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App container">
      <Weather defaultCity="Shanghai" />
      <footer>
        This project was coded by Olga Tsyrulyk,{" "}
        <a
          href="https://github.com/ts-olga/weather-app-react-final"
          target="_blank"
          rel="noreferrer"
        >
          open-soursed on GitHub
        </a>
        , hosted on
        <a
          href="https://thriving-rugelach-c5a495.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Netlify
        </a>
      </footer>
    </div>
  );
}

export default App;
