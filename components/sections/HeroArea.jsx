import React from 'react'
import HeroHeading from '../headings/HeroHeading'
import HeroBlock from '../../public/hero-block.svg'
import FlutterIcon from '../../public/flutter-icon.webp';
import DartIcon from '../../public/dart-icon.webp';
import HeroPhone from '../../public/hero-phone.webp';
import Image from 'next/image'
import NavBar from './NavBar';

export default function HeroArea() {
  return (
    <div id='hero-area' className='flex flex-col gap-[92px] md:gap-24 px-5 bg-opacity-10 bg-gradient-to-t from-light-gradient/5 to-dark-gradient/5'>
      
      <NavBar/>
      
      <div className='flex flex-col items-center gap-10 lg:gap-8'>
        <div className='flex flex-col gap-4 md:gap-6 lg:gap-5'>
          <HeroHeading className='-mt-[40px] md:mt-0 lg:mt-12'>
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
      
      <div className='flex items-start lg:gap-24 w-full lg:w-auto mx-auto max-w-[840px] justify-between'>
        <div id='flutter-icon' className='px-2 lg:p-5 mt-[92px] md:mt-[150px] lg:mt-32'>
          <Image className='w-[89px] md:w-[158px] lg:w-[131px]'  src={FlutterIcon} alt="flutter" />
        </div>
        <Image className='w-[208px] md:w-[350px] lg:w-[300px]' src={HeroPhone} alt="mobile application" />
        <div id='dart-icon' className='px-2 lg:p-5 mt-[92px] md:mt-[150px] lg:mt-32'>
          <Image className='flex-shrink-0 w-[89px] md:w-[158px] lg:w-[131px]' src={DartIcon} alt="dart" />
        </div>
      </div>
    </div>
  )
}
