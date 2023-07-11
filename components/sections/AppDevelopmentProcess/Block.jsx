import Image from 'next/image'
import React from 'react'

export default function Block({ id, title, content, imagePath, cssClass }) {
  
  return (
    <div className={`text-center max-w-[220px] md:row-span-2 ${cssClass}`}>
      <Image className='mx-auto mb-[50px]' width={105} height={122} src={imagePath} alt='planning-and-concept-development'/>
      <div className='flex flex-col gap-2.5 mb-5'>
        <p className='text-lg md:text-xs lg:text-sm font-bold leading-[21px] md:leading-[18px]'>{ title }</p>
        <p className='text-lg md:text-sm lg:text-sm leading-[25px] md:leading-[18px] lg:leading-[20px] tracking-tight'>{ content }</p>
      </div>
      <Image className='mx-auto' width={24} height={24} src='/ellipse.svg' alt='ellipse'/>
    </div>
  )
}
