import React from 'react'
import { cn } from '../../utils/cn'

const Container = ({ 
  children, 
  size = 'default',
  className = '',
  ...props 
}) => {
  const baseClasses = 'mx-auto px-4 sm:px-6 lg:px-8'
  
  const sizes = {
    sm: 'max-w-4xl',
    default: 'max-w-7xl',
    lg: 'max-w-screen-xl',
    full: 'max-w-full'
  }
  
  const containerClasses = cn(
    baseClasses,
    sizes[size],
    className
  )
  
  return (
    <div className={containerClasses} {...props}>
      {children}
    </div>
  )
}

export default Container