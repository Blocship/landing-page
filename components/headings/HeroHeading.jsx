import React from 'react'

export default function HeroHeading({ children, className }) {
  return (
    <h1 className={`relative mx-auto font-normal max-w-[1200px] text-center md:text-[46px] text-[33px] lg:text-6xl leading-tight tracking-tight ${className}`}>
      { children }
    </h1>
  )
}
