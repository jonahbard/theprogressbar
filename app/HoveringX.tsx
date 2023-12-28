import React from 'react'
import Image from 'next/image';


function HoveringX() {
  return (
    <div>
        <a href='https://twitter.com/@jonahbard__'>
            <Image
                className='fixed bottom-10 right-10'
                src={'/x.png'}
                alt="share on x"
                width={20}
                height={20}
            />
        </a>
        
    </div>
  )
}

export default HoveringX