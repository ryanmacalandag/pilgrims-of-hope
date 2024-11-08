import React from 'react'
import PopeFrancisQuotes from './PopeFrancisQuotes'

export default function Jubilee2025Primer() {
  return (
    <section className='py-8 my-8 lg:my-12'>
      <div className='group relative w-full max-w-screen-2xl mx-auto px-0 sm:px-12 '>
        <div className='w-full lg:gap-12 px-6 md:px-12 lg:px-16 pt-4 lg:pt-20 pb-2 lg:pb-8 bg-white'>
          <div className='flex flex-col gap-8 border-b pb-2'>
            <h2 className='text-2xl md:text-3xl font-serif tracking-tight'>Jubilee Year 2025 Primer</h2>
          </div>
          <PopeFrancisQuotes></PopeFrancisQuotes>
          
        </div>
      </div>
    </section>
  )
}
