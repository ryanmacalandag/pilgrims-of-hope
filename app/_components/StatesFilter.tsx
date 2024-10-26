import Link from 'next/link'
import React from 'react'
export const statesAU = ['act','nsw','nt','vic','sa','tas','qld','wa']

export default function StatesFilter({selected}: {selected: string}) {
  
  return (
    <section className='w-full max-w-screen-lg mx-auto flex flex-row flex-wrap justify-center items-center gap-2 px-6 py-6'>
      <Link
              href={"/sites/"}
              className={(selected == 'featured' ? 'text-stone-100 bg-teal-700 ' : 'text-stone-700 bg-stone-300/60 ' ) + 'w-fit h-full flex justify-center hover:text-white hover:bg-teal-700 rounded-full px-3 sm:px-5 py-1 sm:py-2 transition duration-300 text-xs font-sans font-bold uppercase tracking-wider'}
            >
              Featured
            </Link>
      {
        statesAU.map((state,key) => {
          return (
            <Link
              href={"/states/"+state}
              key={key}
              className={(selected == state ? 'text-stone-100 bg-teal-700 ' : 'text-stone-700 bg-stone-300/60 ' ) + 'w-fit h-full flex justify-center hover:text-white hover:bg-teal-700 rounded-full px-3 sm:px-5 py-1 sm:py-2 transition duration-300 text-xs font-sans font-bold uppercase tracking-wider'}
            >
              {state}
            </Link>
          )
        })
      }
    </section>
  )
}
