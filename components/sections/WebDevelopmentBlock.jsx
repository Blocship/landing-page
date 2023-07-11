import React from 'react'
import Image from 'next/image'
import Flutter from '../../public/flutter.svg'
import DB from '../../public/db.svg'
import FeaturesBlock from './DevelopmentBlock/FeaturesBlock'
import WebMockup from '../../public/web-mockup.webp'
import LetsDiscuss from './DevelopmentBlock/LetsDiscuss'

export default function WebDevelopmentBlock() {
  return (
    <div className='px-6 md:px-10 max-w-[1212px] mx-auto flex flex-col gap-20 lg:gap-40 py-[50px] md:py-[25px] lg:py-[50px]'>
      
      <div className='grid items-center gap-14 md:grid-cols-3 md:gap-[62px] lg:gap-[100px]'>
        
        <div className='grid items-center justify-center w-full h-full relative'>
          <Image className='absolute right-0 top-0' src={WebMockup} alt="application mockup" />
        </div>
        
        <div className='flex flex-col gap-8 lg:gap-[50px] md:col-span-2'>
          <div className='flex gap-5 md:gap-3 lg:gap-5'>
            <Image className='w-[52px] md:w-[40px] lg:w-[52px]' src={Flutter} alt="Flutter" />
            <Image className='w-[52px] md:w-[40px] lg:w-[52px]' src={DB} alt="database" />
          </div>
          
          <div className='max-w-[591px] flex flex-col gap-4 md:gap-[18px] lg:gap-[30px]'>
            <h3 className='font-semibold text-[28px] md:text-[24px] lg:text-[35px] leading-[33px] md:leading-[29px] lg:leading-[43px]'>Web Development</h3>
            <p className='text-[#1F1F1F]/50 font-normal text-[16px] md:text-sm lg:text-[16px] leading-[25px] md:leading-[20px] lg:leading-[25px]'>
            A fully integrated suite of authentication and authorization products, Stytch’s platform removes the headache of identity and access management. Everything you need — customizable to fit your brand.
            </p>
          </div>
          
          <FeaturesBlock cta='Let discuss your web idea!'/>
        </div>
        
        <LetsDiscuss className={'md:hidden place-self-center'}>
          Let discuss your web idea!
        </LetsDiscuss>
      </div>
    </div>
  )
}
 