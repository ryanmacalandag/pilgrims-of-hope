import React from 'react'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className='relative w-full mt-12'>

      <div className='w-full mx-auto px-6 py-16 border-t border-orange-400 border-dotted'>
        <p className='w-full text-center text-sm'>Copyright ©2024 All rights reserved.</p>
      </div>

      <div className="w-full">
        <Image
          src='/bg/edge-mountains.svg'
          alt="mountains"
          width={1200}
          height={50}
          className="w-full"
        />
      </div>
      <div className="absolute -z-10 bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-stone-300 via-transparent to-transparent"></div>
    </footer>
  )
}
