import React from 'react'
import PopeFrancisQuotes from './PopeFrancisQuotes'
import JubileeMainTopics from './JubileeMainTopics'
import JubileeFAQ from './JubileeFAQ'

export default function Jubilee2025Primer() {
  return (
    <section className='my-8 lg:my-12'>
      <div className='w-full max-w-screen-2xl mx-auto px-0 sm:px-12'>
        <div className='w-full lg:gap-12 pt-12 lg:pt-20 pb-16 lg:pb-20 bg-white rounded-none sm:rounded-2xl'>
          <div className='flex flex-col gap-8 border-b-2 border-green-500 border-dotted pb-2 px-6 md:px-12 lg:px-16'>
            <h2 className='text-2xl md:text-3xl font-serif tracking-tight'>Jubilee Year 2025 Primer</h2>
          </div>
          <PopeFrancisQuotes></PopeFrancisQuotes>
          <JubileeMainTopics></JubileeMainTopics>
          <JubileeFAQ></JubileeFAQ>
        </div>
      </div>
    </section>
  )
}
