import React from 'react'

export default function SubHeading({ children, className }) {
  return (
    <h4 className={`subheading w-fit px-1 mx-auto font-medium text-lg leading-tight tracking-tight ${className}`}>{ children }</h4>
  )
}
