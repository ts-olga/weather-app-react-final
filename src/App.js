import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App container">
      <Weather />
      <footer>
        This project was coded by Olga Tsyrulyk,{" "}
        <a
          href="https://github.com/ts-olga/weather-app-react-final"
          target="_blank"
          rel="noreferrer"
        >
          open-soursed on GitHub
        </a>
      </footer>
    </div>
  );
}

export default App;
