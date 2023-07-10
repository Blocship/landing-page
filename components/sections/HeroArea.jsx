import React from 'react'
import HeroHeading from '../headings/HeroHeading'
import HeroBlock from '../../public/hero-block.svg'
import Image from 'next/image'

export default function HeroArea() {
  return (
    <div className='flex flex-col items-center gap-10 lg:gap-8'>
      <div className='flex flex-col gap-4 md:gap-6 lg:gap-5 px-5'>
        <HeroHeading className='mt-12'>
          We <Image className='inline w-[27px] md:w-[42px] lg:w-[54px]' src={HeroBlock} alt="build" /> <strong>Flutter Centric</strong> Mobile Apps That Engage & Convert Users.
        </HeroHeading>
        
        <p className='text-sm leading-[19px] md:text-lg md:leading-[35px] lg:text-[22px] lg:leading-[3 5px] text-[#B4BCD0] max-w-[516px] lg:max-w-[663px] mx-auto text-center'>
          Building a great empire with blocs of flutter and taking it to the next level and innovation into the world of era
        </p>
      </div>
      
      <button className='rounded-full border border-secondary text-secondary bg-secondary/10 px-[30px] py-[15px] text-[16px] font-medium leading-none'>
        Contact Us
      </button>
    </div>
  )
}
