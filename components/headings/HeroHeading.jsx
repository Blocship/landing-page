import React from 'react'

export default function HeroHeading({ children, className }) {
  return (
    <h1 className={`mx-auto font-medium text-6xl leading-tight tracking-tight ${className}`}>
      { children }
    </h1>
  )
}
