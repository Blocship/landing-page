import React from 'react'

export default function SectionHeading({ children, className }) {
  return (
    <h2 className={`font-bold text-5xl leading-tight tracking-tight ${className}`}>{ children }</h2>
  )
}
