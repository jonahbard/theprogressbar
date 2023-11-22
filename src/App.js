import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{
  display: 'flex' }}>

          <HeroText />
          <HeroWorldIcon />
        </div>

        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

function HeroText(){
  return <h1 class="hero-title"> <br/> how are we doing? </h1>;
}

function HeroWorldIcon() {
  return <h1 class="hero-world-icon"> 🌎 </h1>;
}

export default App;
