import './App.css';
import Weather from "./Weather";

function App() {
  return (
  <div className="App">
    <div className="background">
      <div className="container">
        <div className="weather-app-wrapper">
          
            <div className="weather-app">
              <Weather defaultCity="Auckland"/>
            </div>
            <small>
              <a
                href="https://github.com/MelaniaZ4/react-weather-app.git"
                target="_blank"
                rel="noreferrer"
              >
              Open-source code {""}
              </a>
              by Melanie Constable
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
