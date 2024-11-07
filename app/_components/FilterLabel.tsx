import React from 'react'

export default function FilterLabel({filterBy,quantity}:{filterBy:string,quantity:number}) {
  return (
    <section>
      <div className="w-full max-w-screen-2xl mx-auto px-6 md:px-12 pt-2 md:pt-2">
        <div className='w-full flex flex-row gap-4 justify-between items-center text-xs text-stone-800 tracking-widest uppercase pb-2 mb-4 border-b border-teal-700/50'>
          <p>Displaying sites for &quot;{filterBy.split('-').join(' ')}&quot;</p>
          <p className="text-right">Showing {quantity} Site{quantity !== 1 ? 's' : ''}</p>
        </div>
      </div>
    </section>
  )
}
