import logo from "./girl.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>dalilaiapichino.com</h1>
        <ul>
          <li>
            {" "}
            <a href="#">About</a>{" "}
          </li>
          <li>
            {" "}
            <a href="#">Works</a>{" "}
          </li>
          <li>
            {" "}
            <a href="#">Contact</a>{" "}
          </li>
        </ul>

        <img src={logo} className="App-logo" alt="logo" />

        <div className="progress">
          <div className="progress-value"></div>
        </div>
      </header>
    </div>
  );
}

export default App;
