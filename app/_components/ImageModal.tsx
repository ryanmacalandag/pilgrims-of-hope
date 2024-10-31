import React from 'react'
import Image from 'next/image'
import { BiXCircle } from 'react-icons/bi';

type ImageModalPropsType = {
  image: string;
  name: string;
}

export default function ImageModal({image,name}:ImageModalPropsType) {
  const props = {image,name}
  
  return (
    <div className='fixed z-50 top-0 left-0 w-full h-dvh bg-neutral-800/95 flex justify-center items-center p-6 md:p-16'>
      <div className='relative w-full max-w-screen-xl h-full overflow-hidden flex justify-center items-center'>
        <Image
          src={props.image}
          alt={props.name}
          width={1200}
          height={800}
          className='w-full h-full max-h-full object-contain object-center'
        /><BiXCircle size={28} className='absolute top-0 right-0 text-stone-200 hover:text-orange-600 transition duration-300'></BiXCircle>
      </div>
    </div>
  )
}
