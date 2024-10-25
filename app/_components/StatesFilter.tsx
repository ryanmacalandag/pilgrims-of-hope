import React from 'react'

export default function StatesFilter() {
  const states = ['ACT','MEL','SYD','NT','WA','SA','QLD','TAS',]
  
  return (
    <section className='w-full max-w-screen-lg mx-auto flex flex-row flex-wrap justify-center items-center gap-2 px-6'>
      {
        states.map((state,key) => {
          return (
            <div key={key} className='w-fit h-full flex justify-center text-stone-700 hover:text-white bg-stone-300/60 hover:bg-teal-700 rounded-full px-5 py-2 transition duration-300'>
              <p className='text-xs font-sans font-bold tracking-wider'>{state}</p>
            </div>
          )
        })
      }
    </section>
  )
}
