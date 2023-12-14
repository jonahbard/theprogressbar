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
      <body>
        <div style={{height: '500px'}}></div>
        <Page1 />
      </body>
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

function Page1(){
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
        <h1 style={{fontSize: '70px', marginBottom: '300px'}}>human civilization began around 12,000 years ago.</h1>
        <h1 style={{fontSize: '70px', fontWeight: 'bold'}}>since then, we’ve made incredible leaps in both technology and society.</h1>
    </div>
);
}