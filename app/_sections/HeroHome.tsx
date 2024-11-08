import React from 'react'
import { Logo } from '../_components/Logo'
import Link from 'next/link'

export default function HeroHome() {
  return (
    <section id='home' className='w-full flex-grow flex justify-center items-center'>
      <div className='w-full h-full max-w-screen-xl mx-auto flex flex-col flex-grow gap-6 justify-center items-center px-6 py-12'>
        <div className='w-60 lg:w-96 max-w-full'>
          <Logo></Logo>
        </div>
        <div>
          <p className='text-center text-balance font-serif text-lg lg:text-xl px-6 md:px-16 py-8 md:py-12'>&quot;For all of us, may the Jubilee be an opportunity to be renewed in hope. God&apos;s word helps us find reasons for that hope. Taking it as our guide, let us return to the message that the Apostle Paul wished to communicate to the Christians of Rome.&quot;</p>
        </div>
        <div>
          <Link href='/sites' aria-label="view gallery of pilgrimage sites" className='text-xs md §:text-base font-sans font-bold uppercase tracking-widest border-2 border-stone-400 hover:border-teal-800 hover:bg-teal-800 hover:text-white rounded-full px-6 py-4 transition duration-300'>
            View Sites
          </Link>
        </div>
      </div>

      

    </section>
  )
}
