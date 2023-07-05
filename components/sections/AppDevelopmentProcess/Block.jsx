import Image from 'next/image'
import React from 'react'

export default function Block({ title, content, imagePath }) {
  return (
    <div className='mt-[80px] lg:mt-[100px] text-center max-w-[220px]'>
      <Image className='mx-auto mb-[50px]' width={105} height={122} src={imagePath} alt='planning-and-concept-development'/>
      <div className='flex flex-col gap-2.5 mb-5 text-sm'>
        <p className='font-bold'>{ title }</p>
        <p>{ content }</p>
      </div>
      <Image className='mx-auto' width={28} height={28} src='/ellipse.svg' alt='ellipse'/>
    </div>
  )
}
