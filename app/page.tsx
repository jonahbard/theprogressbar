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
          <Page4 />
          <Page5 />
          <Page6 />
      </header>
   )
}

function HeroText(){
  return <h1 className="hero-title"> how are we doing? </h1>;
}

function HeroWorldIcon() {
  return <h1 className="hero-world-icon" style={{marginBottom: '50px'}}> 🌎 </h1>;
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
      text1='in 10,000 BCE, the average 15-year-old, well...  didn’t live past age 12.'
      text2='through biomedical advancements, we’ve reduced child mortality rates by over 90%.'
      barPath='/childmortalitybar.svg'
    />
  )
}

function Page4(){
  return (
    <H2Page 
      text1='🔥 what a dub.'
      text2='but wait. with that, we’ve more than doubled the average human lifespan.'
      barPath='/lifespanbar1.svg'
    />
  )
}

function Page5(){
  return (
    <H2Page 
      text1=''
      text2='the highest regional life expectancy is now in Monaco, at 89.6 years.'
      barPath='/lifespanbar2.svg'
    />
  )
}

function Page6(){
  return (
    <H2Page 
      text1='that’s a roughly 3X improvement.'
      text2='good shit, humanity.'
    />
  )
}

function H1Page({ title } : { title: string }){
  return (
    <section>
      <h1 style={{paddingTop: '30vh'}}>{title}</h1>
    </section>
  )
}

function H2Page({ text1, text2, barPath } : { text1: string, text2: string, barPath?: string }){
  return (
    <section style={{display: 'flex', flexDirection: 'column', alignItems: 'left', justifyContent: 'center'}}>
      <h2 style={{marginBottom: '50px'}}>{text1}</h2>
      <h2 style={{fontWeight: 'bold'}}>{text2}</h2>
      {barPath && (
        <div style={{ paddingLeft: '5%', paddingRight: '5%', paddingTop: '100px'}}>
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