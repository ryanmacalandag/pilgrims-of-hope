import { Checkbox } from '@headlessui/react'
import Link from 'next/link'
import React from 'react'
import { BiChevronRight, BiMailSend } from 'react-icons/bi'

export default function JubileeFAQAccordion() {
  return (
    <div className='flex flex-col gap-8 lg:gap-12 px-8 md:px-12 lg:px-16 py-12 md:py-12 lg:py-16'>
      <div className='border-b-2 border-green-500/40 border-dotted pb-1'>
        <h3 className='text-sm md:text-base text-left font-sans font-bold text-green-700 uppercase tracking-wider'>Frequently Asked Questions</h3>
      </div>
      <div className='grid grid-cols-12 gap-4'>
        <div className='col-span-12 md:col-span-5 mb-6'>
          <div className='flex flex-col gap-6 pl-0 md:pl-0'>
            <p className='text-2xl md:text-3xl font-serif text-balance'>Here are some questions you might ask</p>
            <p>Here is a list of the most common Jubilee questions. If you can&#39;t find an answer to your question, please don&#39;t hesitate to reach out to us.</p>
            <p className='flex gap-3'>
              <span className='font-bold'>Need help? </span>
              <Link
                href='mailto:media@catholic.org.au'
                className='font-serif text-orange-600 hover:text-orange-400 border-b border-orange-500 border-dashed flex flex-row gap-1 items-center transition duration-300'
              >
                Send an email
                <BiMailSend size={20}></BiMailSend>
              </Link>
            </p>
          </div>
        </div>
        <div className='col-span-12 md:col-span-7'>
          <div className='grid grid-cols-12 gap-4'>
            <div className='col-span-12 hover:cursor-pointer'>
              <Checkbox className='group flex flex-col gap-2 border-b border-stone-300'>
                <div className='flex flex-shrink-0 gap-2 items-center group-hover:text-green-600'>
                  <BiChevronRight size={24} className='w-fit min-w-6 rotate-0 group-aria-[checked=true]:rotate-90 transition duration-300'></BiChevronRight>
                  <h4 className='text-lg *:md:text-xl font-serif font-bold'>What is the Jubilee 2025, and why is it important?</h4>
                </div>
                <p className='max-h-0 group-aria-[checked=true]:max-h-[600px] overflow-hidden transition-max-h duration-500 delay-75 mb-2 group-aria-[checked=true]:mb-4 text-base md:text-base pl-8 '>The Jubilee 2025, also called the Holy Year, is a special year of grace and celebration within the Catholic Church, set to unite believers around the world in faith, renewal, and reconciliation. Marked by Pope Francis as a year of hope, this Jubilee invites the faithful to reflect on God&#39;s mercy and to seek spiritual growth through acts of devotion, prayer, and charity.</p>
              </Checkbox>
            </div>
            <div className='col-span-12'>
              <Checkbox className='group flex flex-col gap-2 border-b border-stone-300'>
                <div className='flex flex-shrink-0 gap-2 items-center group-hover:text-green-600'>
                  <BiChevronRight size={24} className='w-fit min-w-6 rotate-0 group-aria-[checked=true]:rotate-90 transition duration-300'></BiChevronRight>
                  <h4 className='text-lg *:md:text-xl font-serif font-bold'>When does the Jubilee 2025 begin, and how long does it last?</h4>
                </div>
                <p className='max-h-0 group-aria-[checked=true]:max-h-[600px] overflow-hidden transition-max-h duration-500 delay-75 mb-2 group-aria-[checked=true]:mb-4 text-base md:text-base pl-8'>The Jubilee 2025 officially begins on December 8, 2024, with the opening of the Holy Door at St. Peter&#39;s Basilica in Rome. It will run until November 2025, culminating in various celebrations, pilgrimages, and ceremonies dedicated to fostering unity, compassion, and faith.</p>
              </Checkbox>
            </div>
            <div className='col-span-12'>
              <Checkbox className='group flex flex-col gap-2 border-b border-stone-300'>
                <div className='flex flex-shrink-0 gap-2 items-center group-hover:text-green-600'>
                  <BiChevronRight size={24} className='w-fit min-w-6 rotate-0 group-aria-[checked=true]:rotate-90 transition duration-300'></BiChevronRight>
                  <h4 className='text-lg *:md:text-xl font-serif font-bold'>What are the main themes of Jubilee 2025?</h4>
                </div>
                <p className='max-h-0 group-aria-[checked=true]:max-h-[600px] overflow-hidden transition-max-h duration-500 delay-75 mb-2 group-aria-[checked=true]:mb-4 text-base md:text-base pl-8 '>Pope Francis has designated the theme of Jubilee 2025 as Pilgrims of Hope. This theme encourages Catholics worldwide to journey spiritually towards hope, drawing strength from faith to overcome life&#39;s challenges. Emphasizing reconciliation and mercy, the Jubilee reminds the faithful of God&#39;s unwavering love and the Church&#39;s call to spread hope.</p>
              </Checkbox>
            </div>
            <div className='col-span-12'>
              <Checkbox className='group flex flex-col gap-2 border-b border-stone-300'>
                <div className='flex flex-shrink-0 gap-2 items-center group-hover:text-green-600'>
                  <BiChevronRight size={24} className='w-fit min-w-6 rotate-0 group-aria-[checked=true]:rotate-90 transition duration-300'></BiChevronRight>
                  <h4 className='text-lg *:md:text-xl font-serif font-bold'> What is the significance of the Holy Door, and how can I participate in this tradition?</h4>
                </div>
                <p className='max-h-0 group-aria-[checked=true]:max-h-[600px] overflow-hidden transition-max-h duration-500 delay-75 mb-2 group-aria-[checked=true]:mb-4 text-base md:text-base pl-8 '>The Holy Door is a sacred symbol of Christ, who opens the way to salvation. During the Jubilee, Holy Doors at major basilicas in Rome and other designated churches worldwide will open as a gesture of spiritual welcome. Pilgrims who pass through the Holy Door, in a spirit of penance and devotion, are invited to receive a special indulgence. You can participate by visiting any designated Holy Door location and fulfilling the sacramental conditions for indulgences.</p>
              </Checkbox>
            </div>
            <div className='col-span-12'>
              <Checkbox className='group flex flex-col gap-2 border-b border-stone-300'>
                <div className='flex flex-shrink-0 gap-2 items-center group-hover:text-green-600'>
                  <BiChevronRight size={24} className='w-fit min-w-6 rotate-0 group-aria-[checked=true]:rotate-90 transition duration-300'></BiChevronRight>
                  <h4 className='text-lg *:md:text-xl font-serif font-bold'>What are indulgences, and how can one obtain an indulgence during the Jubilee?</h4>
                </div>
                <p className='max-h-0 group-aria-[checked=true]:max-h-[600px] overflow-hidden transition-max-h duration-500 delay-75 mb-2 group-aria-[checked=true]:mb-4 text-base md:text-base pl-8 '>An indulgence is a spiritual grace that lessens the temporal punishment due to sins. During the Jubilee, the Church offers special indulgences to encourage reconciliation and personal conversion. To obtain an indulgence, pilgrims are called to pass through the Holy Door with a contrite heart, participate in the Eucharist, pray for the Pope&#39;s intentions, and perform acts of charity or mercy.</p>
              </Checkbox>
            </div>
            <div className='col-span-12'>
              <Checkbox className='group flex flex-col gap-2 border-b border-stone-300'>
                <div className='flex flex-shrink-0 gap-2 items-center group-hover:text-green-600'>
                  <BiChevronRight size={24} className='w-fit min-w-6 rotate-0 group-aria-[checked=true]:rotate-90 transition duration-300'></BiChevronRight>
                  <h4 className='text-lg *:md:text-xl font-serif font-bold'>How can Catholics in Australia participate in the Jubilee 2025 if they cannot travel to Rome?</h4>
                </div>
                <p className='max-h-0 group-aria-[checked=true]:max-h-[600px] overflow-hidden transition-max-h duration-500 delay-75 mb-2 group-aria-[checked=true]:mb-4 text-base md:text-base pl-8 '>Catholics in Australia can celebrate the Jubilee through local pilgrimages to designated Holy Door churches, special liturgies, and events hosted by dioceses and parishes. In addition, prayer and acts of charity are encouraged as ways to embody the Jubilee&#39;s spirit of hope and unity. The Australian Catholic Bishops Conference will provide resources and information on local events and digital tools to help Australian Catholics participate fully in the Jubilee experience from afar.</p>
              </Checkbox>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
