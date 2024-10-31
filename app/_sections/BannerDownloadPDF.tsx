import React from 'react'
import Link from 'next/link'

export default function BannerDownloadPDF() {
  return (
    <section>
      <div className="w-full max-w-screen-lg mx-auto px-6">
        <div className='flex md:flex-row flex-col justify-between items-start md:items-center gap-10 text-white bg-gradient-to-bl from-stone-800 via-stone-800 to-stone-600 px-10 sm:px-12 py-16 rounded-2xl my-8 lg:my-12'>
          <div className='flex flex-col gap-3'>
            <div className='flex gap-2 items-center text-2xl md:text-3xl font-serif text-balance'>Download the PDF version</div>
            <p className='text-balance'>Need a printed version of the list? We compiled all the pilgrimage sites into a convenient PDF book you can print at home.</p>
            
          </div>
          <div className='w-fit'>
            <Link href='#'  aria-label="Download printable PDF" className='w-fit uppercase text-sm font-bold tracking-widest border border-stone-200 hover:bg-stone-200 hover:text-stone-800 px-8 py-4 mt-4 transition duration-300'>Download</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
