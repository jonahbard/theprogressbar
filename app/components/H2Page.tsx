import '../globals.css';
import { JSXElementConstructor, PromiseLikeOfReactNode, ReactElement, ReactNode, ReactPortal, useEffect, useState } from 'react';
import Image from 'next/image';

function H2Page({ text, barPath, barPathSmall} : { text: string[], barPath?: string , barPathSmall?: string}){
    return (
      <section style={{display: 'flex', flexDirection: 'column', alignItems: 'left', justifyContent: 'center'}}>
        {text.map((line, index) => 
          <h2 
            key={index} 
            style={  
              index === text.length - 1 
                ? {fontWeight: 'bold', marginBottom: '50px'}
                : {marginBottom: '50px'} 
            }
          >
            {line}
          </h2>
        )}
        {barPath && (
          <div className="px-5 pt-25" style={{ paddingLeft: '5%', paddingRight: '5%', paddingTop: '50px'}}>
          {/* will show when screen width is less than 500px */}
          {barPathSmall && (
            <Image
               className={"sm:hidden"}
               src={barPathSmall}
               alt="progress bar mini"
               width={500}
               height={50}
            />
          )}
          {/* will show when screen width is more than or equal to 500px */}
          {barPath && (
            <Image
               className={"hidden sm:block"}
               src={barPath}
               alt="progress bar"
               width={1000}
               height={100}
            />
          )}
       </div>
        )}
        
        
      </section>
    )
  }

  export default H2Page