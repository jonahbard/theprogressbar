'use client'

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

        console.log(scrollPercentage)

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
            height: "4px", 
            width: "100%", 
            backgroundColor: "white", 
            position:"fixed", 
            top:"0", 
            left:"0", 
            right:"0"
        }}
    >
        <div className="progress-fill"
            style={{height: "100%", backgroundColor: "black", width: progressWidth + '%'}}>
        </div>
    </div>
  )
}

export default BasicProgressBarGraphic