import React from 'react'
import SubHeading from '../headings/SubHeading'
import SectionHeading from '../headings/SectionHeading'
import SectionText from '../text/SectionText'
import Image from 'next/image'
import IOS from '../../public/ios.svg'
import Android from '../../public/android.svg'
import FeaturesBlock from './DevelopmentBlock/FeaturesBlock'
import AppMockup from '../../public/application-mockup.webp'
import LetsDiscuss from './DevelopmentBlock/LetsDiscuss'

export default function AppDevelopmentBlock() {
  return (
    <div className='px-6 md:px-10 max-w-[1212px] mx-auto flex flex-col gap-20 lg:gap-40 py-[50px] md:py-[25px] lg:py-[50px]'>
      
      <div>
        <SubHeading className='mb-4 md:mb-6 lg:mb-[30px]'>What We Offer</SubHeading>
        <div className='flex flex-col gap-5'>
          <SectionHeading className='text-center'>Blocship Expertise</SectionHeading>
          <SectionText className='text-center max-w-[851px] text-[#1F1F1F]/50'>
            A fully integrated suite of authentication and authorization products, 
            Stytch’s platform removes the headache of identity and access management. 
            Everything you need — customizable to fit your brand.
          </SectionText>
        </div>
      </div>
      
      <div className='grid items-center gap-14 md:grid-cols-3 md:gap-[62px] lg:gap-[100px]'>
        <div className='flex flex-col gap-8 lg:gap-[50px] md:col-span-2'>
          <div className='flex gap-5 md:gap-3 lg:gap-5'>
            <Image className='w-[52px] md:w-[40px] lg:w-[52px]' src={IOS} alt="ios" />
            <Image className='w-[52px] md:w-[40px] lg:w-[52px]' src={Android} alt="android" />
          </div>
          
          <div className='max-w-[591px] flex flex-col gap-4 md:gap-[18px] lg:gap-[30px]'>
            <h3 className='font-semibold text-[28px] md:text-[24px] lg:text-[35px] leading-[33px] md:leading-[29px] lg:leading-[43px]'>Application Development</h3>
            <p className='text-[#1F1F1F]/50 font-normal text-[16px] md:text-sm lg:text-[16px] leading-[25px] md:leading-[20px] lg:leading-[25px]'>
              A fully integrated suite of authentication and authorization products, Stytch’s platform removes the headache of identity and access management. Everything you need — customizable to fit your brand.
            </p>
          </div>
          
          <FeaturesBlock cta='Let discuss your app idea!' />
        </div>
        
        <div className='grid items-center justify-center w-full h-full'>
          <Image className='w-[268px] md:w-[220px] lg:w-[350px]' src={AppMockup} alt="application mockup" />
        </div>
        
        <LetsDiscuss className={'md:hidden place-self-center'}>
          Let discuss your app idea!
        </LetsDiscuss>
      </div>
    </div>
  )
}
 