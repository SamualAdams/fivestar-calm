import React from 'react'
import { cn } from '../../utils/cn'

const Section = ({ 
  children, 
  background = 'white',
  padding = 'default',
  id,
  className = '',
  ...props 
}) => {
  const baseClasses = 'relative'
  
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    gradient: 'bg-gradient-to-br from-gray-50 to-white',
    violet: 'bg-gradient-to-br from-violet-50 to-white',
    dark: 'bg-gradient-to-br from-gray-800 to-gray-900 text-white'
  }
  
  const paddings = {
    none: '',
    sm: 'py-8 lg:py-12',
    default: 'py-16 lg:py-20',
    lg: 'py-20 lg:py-28',
    xl: 'py-24 lg:py-32'
  }
  
  const sectionClasses = cn(
    baseClasses,
    backgrounds[background],
    paddings[padding],
    className
  )
  
  return (
    <section id={id} className={sectionClasses} {...props}>
      {children}
    </section>
  )
}

export default Section