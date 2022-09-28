import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo Devmaster" />
        <p>
          Welcome to, Devmaster Academy
        </p>
        <a
          className="App-link"
          href="https://devmaster.edu.vn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
