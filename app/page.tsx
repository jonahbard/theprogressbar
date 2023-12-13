import './globals.css';
import { useEffect, useState } from 'react';


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
  display: 'flex', justifyContent: 'space-between' }}>

          <HeroText />
          <div style={{flexGrow: 1}}></div>
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

function TextOverBold() {
  return
}

function ProgressBar() {
  return
}

function IntroTopicHeader(){
  
}