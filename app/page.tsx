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
        <section style={{
  display: 'flex', justifyContent: 'space-between' }}>

          <HeroText />
          <div style={{flexGrow: 1}}></div>
          <HeroWorldIcon />
        </section>
      </header>
      <header>
          <div style={{height: '500px'}}></div>
          <Page1 />
          <div style={{height: '500px'}}></div>
          <Page2 />
          <div style={{height: '500px'}}></div>
          <Page3 />
          <div style={{height: '500px'}}></div>
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

function Page1(){
  return (
    <section style={{display: 'flex', flexDirection: 'column', alignItems: 'left', justifyContent: 'center'}}>
        <h2 style={{marginBottom: '300px'}}>human civilization began around 12,000 years ago.</h2>
        <h2 style={{fontWeight: 'bold'}}>since then, we’ve made incredible leaps in both technology and society.</h2>

    </section>
);
}


function Page(){

}

function Page2(){
  return (
    <section>
      <h1>first, let’s look at progress in technology.</h1>
    </section>
  )
}

function Page3(){
  return (
    <section style={{display: 'flex', flexDirection: 'column', alignItems: 'left', justifyContent: 'center'}}>
        <h2 style={{marginBottom: '300px'}}>in 10,000 BCE, the average 5-year-old, well...  didn’t live past age 2.</h2>
        <h2 style={{fontWeight: 'bold'}}>through biomedical advancements, we’ve reduced infant mortality rates by over 90%.</h2>
    </section>
  )
}