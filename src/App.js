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
