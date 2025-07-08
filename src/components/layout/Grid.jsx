import React from 'react'
import { cn } from '../../utils/cn'

const Grid = ({ 
  children, 
  cols = 'auto',
  gap = 'default',
  className = '',
  ...props 
}) => {
  const baseClasses = 'grid'
  
  const columns = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
    auto: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
  }
  
  const gaps = {
    sm: 'gap-4',
    default: 'gap-8',
    lg: 'gap-12',
    xl: 'gap-16'
  }
  
  const gridClasses = cn(
    baseClasses,
    typeof cols === 'number' ? columns[cols] : columns[cols] || cols,
    gaps[gap],
    className
  )
  
  return (
    <div className={gridClasses} {...props}>
      {children}
    </div>
  )
}

export default Grid