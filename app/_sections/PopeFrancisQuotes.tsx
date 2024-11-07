import React from 'react'
import Image from 'next/image'

export default function PopeFrancisQuotes() {
  return (
    <section className='bg-white py-8 my-8 lg:my-12'>
      <div className='w-full max-w-screen-lg mx-auto px-6 md:px-12 pt-4 lg:pt-12 pb-2 lg:pb-8'>
        <div className='flex flex-col gap-8 text-center'>
          <p className='text-balance font-serif text-lg lg:text-xl'>&quot;For all of us, may the Jubilee be an opportunity to be renewed in hope. God&apos;s word helps us find reasons for that hope. Taking it as our guide, let us return to the message that the Apostle Paul wished to communicate to the Christians of Rome.&quot;</p>
          <div className='flex justify-center items-center gap-2'>
            <p className='bg-stone-300 rounded-full overflow-hidden'>
              <Image
                src='/components/popefrancis.jpg'
                alt='pope francis'
                width={60}
                height={60}
              />
            </p>
            <p className='text-sm uppercase tracking-widest'>Pope Francis</p>
            <p></p>
          </div>
        </div>
      </div>
    </section>
  )
}
