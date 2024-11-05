import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function BannerDownloadPDF() {
  return (
    <section>
      <div className="group relative w-full max-w-screen-lg mx-auto px-6">
        <div className='relative flex md:flex-row flex-col justify-between items-start md:items-center gap-10 text-white bg-gradient-to-tr from-stone-800 via-stone-800/80 to-transparent px-10 sm:px-12 lg:px-16 py-16 rounded-2xl my-8 lg:my-12 group-hover:shadow-2xl group-hover:brightness-125 overflow-hidden transition duration-300'>
          <div className='w-1/2 md:w-3/5 flex flex-col gap-3'>
            <div className='flex gap-2 items-center text-2xl md:text-3xl font-serif text-balance'>Download the PDF version</div>
            <p className='text-balance'>Need a printed version of the list? We compiled all the pilgrimage sites into a PDF book you can conveniently print at home.</p>
            <div className='w-fit mt-6'>
              <Link href='#'  aria-label="Download printable PDF" className='w-fit uppercase text-sm font-bold tracking-widest border border-stone-200 hover:bg-stone-200 hover:text-stone-800 px-8 py-4 mt-4 transition duration-300'>Download</Link>
            </div>
          </div>
          <div className='absolute -z-10 top-0 left-0 w-full h-full overflow-hidden'>
            <Image
              src='/bg/map-lines.png'
              alt='map lines'
              width={800}
              height={140}
              className='w-full h-full object-cover object-center'
            />
          </div>
        </div>
        <div className='absolute bottom-10 sm:-bottom-3 md:-bottom-6 -right-10 sm:right-8 md:right-20 scale-90 sm:scale-100 flex group-hover:rotate-6 group-hover:-translate-y-8 transition duration-300 overflow-hidden'>
          <Image
            src='/components/pdf.svg'
            alt='pdf'
            width={280}
            height={300}
          />
        </div>

      </div>
    </section>
  )
}
