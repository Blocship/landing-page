import React from 'react'
import LetsDiscuss from './LetsDiscuss'

export default function FeaturesBlock({cta}) {
  return (
    <div className='flex flex-col gap-8 lg:gap-[50px]'>
      <div className='grid grid-cols-2 md:grid-cols-3 md:grid-rows-3 gap-5 md:gap-3 lg:gap-5 text-center uppercase text-xs font-semibold text-[#19303D]'>
        <div className='flex flex-col gap-5 md:gap-3 lg:gap-5 md:row-span-2'>
          <span className='px-[15px] py-[10px] rounded-full bg-[#19303D0D]'>Real time chat</span>
          <span className='px-[15px] py-[10px] rounded-full bg-[#19303D0D]'>sdk integration</span>
        </div>
        <div className='flex flex-col gap-5 md:gap-3 lg:gap-5 md:row-span-2'>
          <span className='px-[15px] py-[10px] rounded-full bg-[#19303D0D]'>geo location</span>
          <span className='px-[15px] py-[10px] rounded-full bg-[#19303D0D]'>push notifications</span>
        </div>
        <div className='grid grid-cols-2 md:flex md:flex-col gap-5 md:gap-3 lg:gap-5 col-span-2 md:row-span-2 md:row-start-2 md:col-start-3'>
          <span className='px-[15px] py-[10px] rounded-full bg-[#19303D0D]'>google maps</span>
          <span className='px-[15px] py-[10px] rounded-full bg-[#19303D0D]'>pixel perfect UI</span>
        </div>
      </div>
      
      <LetsDiscuss className={'hidden md:block'}>
        {cta}
      </LetsDiscuss>
    </div>
  )
}
