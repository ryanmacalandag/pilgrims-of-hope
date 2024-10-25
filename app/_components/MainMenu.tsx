import Link from 'next/link';
import React from 'react'
import { BiSolidGrid } from 'react-icons/bi';

export const MainMenu = () => {

  return (
    <div className='h-full flex items-center gap-6'>
            <div className='h-full hover:bg-orange-200 px-2 py-2 transition duration-300'>
              <Link href='/sites' className='text-sm tracking-widest uppercase'>
                <BiSolidGrid size={32}></BiSolidGrid>
              </Link>
            </div>
    </div>
  )
}
