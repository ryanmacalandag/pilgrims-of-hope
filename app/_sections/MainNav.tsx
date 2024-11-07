import React from 'react'
import { Logo } from '../_components/Logo'
import { MainMenu } from '../_components/MainMenu'

export const MainNav = () => {
  return (
    <div className='w-full bg-white mb-4 sm:mb-12'>
      <div className='w-full h-full max-w-screen-2xl mx-auto flex flex-row justify-between items-end px-6 md:px-12 pt-6 pb-4'>
        <div className='w-28 md:w-36 '>
          <Logo></Logo>
        </div>
        <MainMenu></MainMenu>
      </div>
    </div>
  )
}