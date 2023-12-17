import './globals.css';
import { JSXElementConstructor, PromiseLikeOfReactNode, ReactElement, ReactNode, ReactPortal, useEffect, useState } from 'react';
import Image from 'next/image'


export default function Home() {
  return (
    <div>
      <StartPage />
      <TechSections />
    </div>
  )
}


function StartPage() {
  return (
    <div className="App">
      <header className="App-header">
        <section style={{display: 'flex', flexDirection: 'column', alignItems: 'left', justifyContent: 'center'}}>
          <HeroWorldIcon />
          <HeroText />
          <h3>
            a visualization of human progress
          </h3>
        </section>
      </header>
        <Intro1 />
    </div>
  );
}

function TechSections(){
   return (
      <header>
          <Page2 />
          <Page3 />
      </header>
   )
}

function HeroText(){
  return <h1 className="hero-title"> <br/> how are we doing? </h1>;
}

function HeroWorldIcon() {
  return <h1 className="hero-world-icon"> 🌎 </h1>;
}


function Intro1(){
  return (
    <H2Page 
      text1='civilization began around 12,000 years ago.'
      text2='since then, we’ve made incredible leaps in both technology and society.'
    />
);
}


function Page2(){
  return (
    <H1Page title="first, let’s look at progress in technology." />
  )
}

function Page3(){
  return (
    <H2Page 
      text1='in 10,000 BCE, the average 5-year-old, well...  didn’t live past age 2.'
      text2='through biomedical advancements, we’ve reduced infant mortality rates by over 90%.'
      barPath='/infantmortalitybar.svg'
    />
  )
}

function H1Page({ title } : { title: string }){
  return (
    <section>
      <h1 style={{paddingTop: '150px'}}>{title}</h1>
    </section>
  )
}

function H2Page({ text1, text2, barPath } : { text1: string, text2: string, barPath?: string }){
  return (
    <section style={{display: 'flex', flexDirection: 'column', alignItems: 'left', justifyContent: 'center'}}>
      <h2 style={{marginBottom: '150px'}}>{text1}</h2>
      <h2 style={{fontWeight: 'bold'}}>{text2}</h2>
      {barPath && (
        <div style={{ paddingLeft: '5%', paddingRight: '10%', paddingTop: '100px'}}>
          <Image
            src={barPath}
            alt="infant mortality progress bar"
            width={1000}
            height={100}
          />
        </div>
      )}
      
      
    </section>
  )
}




function TextOverBold() {
  return
}

function ProgressBar() {
  return
}

function IntroTopicHeader(){
  
}