import React from 'react'
import Image from 'next/image'

type ImageModalPropsType = {
  image: string;
  name: string;
}

export default function ImageModal({image,name}:ImageModalPropsType) {
  const props = {image,name}
  
  return (
    <div className='fixed z-50 top-0 left-0 w-full h-dvh bg-stone-600/70 flex justify-center items-center p-16'>
      <div className='w-full max-w-screen-xl h-full overflow-hidden flex justify-center items-center'>
        <Image
          src={props.image}
          alt={props.name}
          width={1200}
          height={800}
          className='w-full max-w-fit h-full max-h-fit object-cover object-center'
        />
      </div>
    </div>
  )
}
