'use client'

import './globals.css';
import { JSXElementConstructor, PromiseLikeOfReactNode, ReactElement, ReactNode, ReactPortal, useEffect, useState } from 'react';
import Image from 'next/image';
import H2Page from './H2Page'
import H1Page from './H1Page'
import BasicProgressBarGraphic from './basicprogressbargraphic';



export default function Home() {
  return (
    <div>
      <BasicProgressBarGraphic />
      <StartPage />
      <Sections />
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
            a brief tour of human advancements
          </h3>
        </section>
      </header>
        <Intro1 />
    </div>
  );
}

function Sections(){
   return (
      <header>
          <TechnologyHeader />
          <Life1 />
          <Life2 />
          <Life3 />
          <NiceWork />
          <Internet />
          <Energy />
          <SocietyHeader />
          <Poverty />
          <Literacy />
          <Democracy />
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
      text={['Civilization began around 12,000 years ago.',
      'Since then, we’ve made incredible leaps in both technology and society.']}
    />
);
}


function TechnologyHeader(){
  return (
    <H1Page title="1. Technology" />
  )
}

function Life1(){
  return (
    <H2Page 
      text={['In 10,000 BCE, the average 15-year-old, well...  likely didn’t live past age 12.', 'Through biomedical advancements, we’ve reduced child mortality rates by over 90%.']}
      barPath='/childmortalitybar.svg'
      barPathSmall='/childmortalitysmall.svg'
    />
  )
}

function Life2(){
  return (
    <H2Page 
      text={['🔥 Awesome.', 'But wait. With that, we’ve more than doubled the average human lifespan.']}
      barPath='/lifespanbar1.svg'
      barPathSmall='/lifespanbar1small.svg'
    />
  )
}

function Life3(){
  return (
    <H2Page 
      text={['The highest regional life expectancy is now in Monaco, at 89.6 years.']}
      barPath='/lifespanbar2.svg'
      barPathSmall='/lifespanbar2small.svg'
    />
  )
}

function NiceWork(){
  return (
    <H2Page 
      text={['That’s a roughly 3X improvement.', 'Nice work, humanity.']}
    />
  )
}

function Internet(){
  return (
    <H2Page 
      text={['The internet connects, informs, and educates the world.',

      'Since 1983, it has scaled to over 5,000,000,000 people.',
      
      'We’re approaching 70% internet penetration worldwide.']}
      barPath='/internetbar.svg'
      barPathSmall='/internetbarsmall.svg'

    />
  )
}

function Energy(){
  return (
    <H2Page 
      text={[
        'The globe’s rapidly growing economies are fueled by energy generation.',

        'But fossil fuel emissions have deteriorated ecosystems and natural environmental cycles.', 
        
        'Slowly, we’re making the transition to a sustainably-powered future.',
        'Clean energy sources account for roughly 20% of global energy production.'
      ]}
      barPath='/energybar.svg'
      barPathSmall='/energybarsmall.svg'
    />
  )
}

function SocietyHeader(){
  return (
    <H1Page 
      title='2. Society'
    />
  )
}

function Poverty(){
  return (
    <H2Page 
      text={[
        'Most humans who ever lived were slaves, indentured servants, or peasant laborers. As recently as the 1800s over 80% of the world was in extreme poverty.',

        'We chopped this number in half.',
        'And then we did it again.',
        'And then again.',
        
        'As of 2022 9.2% of the world’s residents now live in extreme poverty.'
      ]}
      barPath='/povertybar.svg'
      barPathSmall='/povertybarsmall.svg'
    />
  )
}

function Literacy(){
  return (
    <H2Page 
      text={[
        'Writing is pretty cool.',

        'It made history start existing. It made complex economies possible. It continues to enable billions of people to support their family and participate in a democratic society.',
        
        '12,000 years ago no one knew how to write.',
        
        'In 1900 hardly 20% of the world was literate.',
        
        'This number is now 87%.']}
      barPath='/literacybar.svg'
      barPathSmall='/literacybarsmall.svg'

    />
  )
}

function Democracy(){
  return (
    <H2Page 
      text={[
        'Modern democratic governments ensure fundamental freedoms and human rights to citizens.',

        'Since the enlightenment, we’ve reached roughly 3.7B people living in democracies.',

        'We still have a ways to go.'
      ]}
      barPath='/democracybar.svg'
      barPathSmall='/democracybarsmall.svg'

    />
  )
}




function ProgressBar() {
  return
}
