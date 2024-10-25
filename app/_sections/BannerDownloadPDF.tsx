import React from 'react'
import { BiBookOpen } from 'react-icons/bi'
import Link from 'next/link'

export default function BannerDownloadPDF() {
  return (
    <section>
      <div className="w-full max-w-screen-lg mx-auto px-6">
        <div className='flex md:flex-row flex-col-reverse justify-between items-start md:items-center text-white bg-gradient-to-bl from-stone-800 via-stone-800 to-stone-600 px-12 py-12 rounded-2xl my-8'>
          <div className='flex flex-col gap-2'>
            <h4 className='text-2xl md:text-3xl font-serif'>Download the PDF list</h4>
            <p className='text-balance'>Need a printed version of the list? We compiled all the pilgrimage sites into a convenient PDF book you can print at home.</p>
            <Link href='#' className='w-fit border border-stone-200 hover:bg-stone-200 hover:text-stone-800 px-6 py-2 mt-4 transition duration-300'>Download</Link>
          </div>
          <div className='w-fit py-8 pr-16'>
            <BiBookOpen size={64}></BiBookOpen>
          </div>
        </div>
      </div>
    </section>
  )
}
