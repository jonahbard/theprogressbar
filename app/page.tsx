import './globals.css';

export default function Home() {
  return (
    <BasicHomePage />
  )
}


function BasicHomePage() {
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
  return <h1 className="hero-title"> <br/> how are we doing? </h1>;
}

function HeroWorldIcon() {
  return <h1 className="hero-world-icon"> 🌎 </h1>;
}