import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          My new react app
        </p>
        <p>To go to the old page run the command "npm old"</p>
      </header>
    </div>
  );
}

export default App;
