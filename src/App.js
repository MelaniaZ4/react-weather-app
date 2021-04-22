import './App.css';
import Weather from "./Weather";

function App() {
  return (
  <div className="App">
    <div className="background">
      <div className="container">
        <div className="weather-app-wrapper">
          <header className="App-header">
            <h1></h1>
          </header>
            <div className="weather-app">
              <Weather />
            </div>
            <small>
              <a
                href="https://github.com/MelaniaZ4/Weather-Application-Project.git"
                target="_blank"
                rel="noreferrer"
              >
              Open-source code 
              </a>
              by Melanie Brandes
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
