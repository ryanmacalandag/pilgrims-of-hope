import Link from 'next/link'
import React from 'react'
export const statesAU = ['act','nsw','nt','vic','sa','tas','qld','wa']

export default function StatesFilter() {
  
  return (
    <section className='w-full max-w-screen-lg mx-auto flex flex-row flex-wrap justify-center items-center gap-2 px-6 py-6'>
      <Link
              href={"/sites/"}
              className='w-fit h-full flex justify-center text-stone-700 hover:text-white bg-stone-300/60 hover:bg-teal-700 rounded-full px-5 py-2 transition duration-300 text-xs font-sans font-bold uppercase tracking-wider'
            >
              FEATURED
            </Link>
      {
        statesAU.map((state,key) => {
          return (
            <Link
              href={"/states/"+state}
              key={key}
              className='w-fit h-full flex justify-center text-stone-700 hover:text-white bg-stone-300/60 hover:bg-teal-700 rounded-full px-5 py-2 transition duration-300 text-xs font-sans font-bold uppercase tracking-wider'
            >
              {state}
            </Link>
          )
        })
      }
    </section>
  )
}
