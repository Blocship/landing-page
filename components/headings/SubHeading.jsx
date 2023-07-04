import React from 'react'

export default function SubHeading({ children, className }) {
  return (
    <h4 className={`font-medium text-lg leading-tight tracking-tight ${className}`}>{ children }</h4>
  )
}
