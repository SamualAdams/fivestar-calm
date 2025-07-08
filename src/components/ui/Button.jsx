import React from 'react'
import { cn } from '../../utils/cn'

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'default',
  className = '',
  onClick,
  disabled = false,
  type = 'button',
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'
  
  const variants = {
    primary: 'bg-violet-primary hover:bg-violet-secondary text-white focus:ring-violet-primary',
    secondary: 'bg-gray-100 hover:bg-gray-200 text-gray-primary focus:ring-gray-300',
    outline: 'border-2 border-violet-primary text-violet-primary hover:bg-violet-primary hover:text-white focus:ring-violet-primary',
    ghost: 'text-violet-primary hover:bg-violet-primary/10 focus:ring-violet-primary',
    cta: 'bg-gradient-to-r from-violet-primary to-violet-secondary hover:from-violet-secondary hover:to-violet-primary text-white shadow-lg hover:shadow-xl focus:ring-violet-primary'
  }
  
  const sizes = {
    sm: 'px-3 py-2 text-sm rounded-md',
    default: 'px-6 py-3 text-base rounded-lg',
    lg: 'px-8 py-4 text-lg rounded-lg',
    xl: 'px-10 py-5 text-xl rounded-xl'
  }
  
  const buttonClasses = cn(
    baseClasses,
    variants[variant],
    sizes[size],
    className
  )
  
  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button