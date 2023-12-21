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
        {/*style={{display: 'flex', flexDirection: 'column', alignItems: 'left', justifyContent: 'center'}}*/}
        <section className='flex flex-col items-left justify-center items-start' >
          <HeroWorldIcon />
          <HeroText />
          <h3 className=''>
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
          <Page7 />
          <Page8 />
          <Page9 />
          <Page10 />
          <Page11 />
          <Page12 />
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
    <H1Page title="1. technology" />
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
      text2='nice work, humanity.'
    />
  )
}

function Page7(){
  return (
    <H2Page 
      text1='the internet connects, informs, and educates the world.


      since 1983, it has scaled to over 5,000,000,000 people. 
      
      
      we’re approaching 70% internet penetration worldwide.'
      text2=''
      barPath='/internetbar.svg'
    />
  )
}

function Page8(){
  return (
    <H2Page 
      text1='The globe’s rapidly growing economies are fueled by energy generation. 


      But fossil fuel emissions have deteriorated ecosystems and natural environmental cycles. 
      
      
      Slowly, we’re making the transition to a sustainably-powered future. 
      Clean energy sources account for roughly 20% of global energy production.'      
      text2=''
      barPath='/internetbar.svg'
    />
  )
}

function Page9(){
  return (
    <H1Page 
      title='2. society'
    />
  )
}

function Page10(){
  return (
    <H2Page 
      text1='Most humans who ever lived were slaves, indentured servants, or peasant laborers. As recently as the 1800s over 80% of the world was in extreme poverty.

      As of 2022 we’ve chopped this number in half.
      And then we did it again.
      And then again.
      
      9.2% of the world’s residents now live in extreme poverty.'
      text2=''
      barPath='/povertybar.svg'
    />
  )
}

function Page11(){
  return (
    <H2Page 
      text1='writing is pretty cool.

      it made history start existing. it made complex economies possible. it continues to enable billions of people to support their family and participate in a democratic society.
      
      12,000 years ago no one knew how to write.
      
      in 1900 hardly 20% of the world was literate.
      
      this number is now 87%.'
      text2=''
      barPath='/literacybar.svg'
    />
  )
}

function Page12(){
  return (
    <H2Page 
      text1='modern democratic governments ensure fundamental freedoms and human rights to citizens.

      since the enlightenment, we’ve reached roughly 2B people living in democracies.'
      text2=''
      barPath='/democracybar.svg'
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