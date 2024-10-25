import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Logo = () => {
  return (
    <div className='group w-full h-full'>
      <Link href={'/'} className=''>
        <Image
          src={'/branding/pilgrims-logo.svg'}
          alt='pilgrims of hope logo'
          width={200}
          height={100}
          className='w-full h-full object-fit group-hover:brightness-125 transition duration-300'
        ></Image>
      </Link>
    </div>
  )
}
