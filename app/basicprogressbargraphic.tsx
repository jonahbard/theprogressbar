'use client'

import { Inter } from 'next/font/google'
import React from 'react'
import { useState, useEffect } from 'react'


function BasicProgressBarGraphic() {

  const [progressWidth, setProgressWidth] = useState(0)

  useEffect(()=>{

    const handleScroll = () => {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        let scrollY = window.scrollY;
        const scrollPercentage = (scrollY / (documentHeight - windowHeight))*100
        setProgressWidth(scrollPercentage);
    }

    window.addEventListener("scroll", handleScroll);

    return()=>{
        window.removeEventListener("scroll", handleScroll)
    }

  },[])
  return (
    <div 
        id="progress-container" 
        style={{
            height: "5px", 
            width: "100%",
            position:"fixed", 
            backgroundColor: "rgba(255, 255, 250, 1)",
            top:"0", 
            left:"0", 
            right:"0"
        }}
    >
        <div className="progress-fill"
            style={{height: "100%", backgroundColor: "rgb(100, 90, 90)", width: progressWidth + '%'}}>
        </div>
        <div style={{height: '50px', backgroundColor: "rgb(255, 255, 250)", boxShadow: '0px 0px 15px 0px rgba(0, 0, 0, 0.2)'}}>
          <h3 
            style={{
                fontSize: "20px",
                color: "rgb(100, 90, 90)",
                position:"fixed",
                top:"15px",
                left:"0",
                fontWeight: '700',
            }}>
            the progress bar
          </h3>
        </div>
    </div>

  )
}

export default BasicProgressBarGraphic