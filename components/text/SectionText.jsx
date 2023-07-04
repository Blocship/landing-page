import React from 'react'

export default function SectionText({ children, className }) {
  return (
    <p className={`text-primary/50 px-1 mx-auto font-medium text-sm md:text-[16px] lg:text-lg ${className}`}>
      { children }
    </p>
  )
}
