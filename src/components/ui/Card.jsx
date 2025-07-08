import React from 'react'
import { cn } from '../../utils/cn'

const Card = ({ 
  children, 
  variant = 'default',
  hover = true,
  padding = 'default',
  className = '',
  ...props 
}) => {
  const baseClasses = 'rounded-xl transition-all duration-300'
  
  const variants = {
    default: 'bg-white shadow-sm border border-gray-200',
    elevated: 'bg-white shadow-lg border border-gray-100',
    gradient: 'bg-gradient-to-br from-violet-50 to-white shadow-sm border border-violet-100',
    outlined: 'bg-white border-2 border-violet-primary/20',
    glass: 'bg-white/80 backdrop-blur-sm shadow-lg border border-white/20'
  }
  
  const hoverEffects = {
    default: 'hover:shadow-md hover:border-gray-300',
    elevated: 'hover:shadow-xl hover:-translate-y-1',
    gradient: 'hover:shadow-md hover:border-violet-200',
    outlined: 'hover:border-violet-primary/40 hover:shadow-md',
    glass: 'hover:shadow-xl hover:bg-white/90'
  }
  
  const paddings = {
    none: '',
    sm: 'p-4',
    default: 'p-6',
    lg: 'p-8',
    xl: 'p-10'
  }
  
  const cardClasses = cn(
    baseClasses,
    variants[variant],
    hover && hoverEffects[variant],
    paddings[padding],
    className
  )
  
  return (
    <div className={cardClasses} {...props}>
      {children}
    </div>
  )
}

export default Card