import React from 'react'
import Card from '../ui/Card'
import Tooltip from '../ui/Tooltip'
import { cn } from '../../utils/cn'

const MetricDisplay = ({ 
  value,
  label,
  tooltip,
  variant = 'default',
  size = 'default',
  className = '',
  ...props 
}) => {
  const variants = {
    default: 'bg-white border border-gray-200',
    primary: 'bg-violet-primary text-white',
    success: 'bg-green-primary text-white',
    gradient: 'bg-gradient-to-br from-violet-primary to-violet-secondary text-white'
  }
  
  const sizes = {
    sm: {
      value: 'text-xl',
      label: 'text-xs',
      padding: 'p-4'
    },
    default: {
      value: 'text-2xl',
      label: 'text-sm', 
      padding: 'p-6'
    },
    lg: {
      value: 'text-3xl',
      label: 'text-base',
      padding: 'p-8'
    }
  }
  
  const isWhiteText = ['primary', 'success', 'gradient'].includes(variant)
  
  return (
    <Card 
      variant="elevated"
      padding="none"
      className={cn(
        'text-center transition-all duration-300 hover:scale-105',
        variants[variant],
        sizes[size].padding,
        className
      )} 
      {...props}
    >
      <div className="flex items-center justify-center gap-2 mb-2">
        <span className={cn(
          'font-medium',
          sizes[size].label,
          isWhiteText ? 'text-white/90' : 'text-gray-600'
        )}>
          {label}
        </span>
        {tooltip && (
          <Tooltip 
            content={tooltip} 
            iconClassName={isWhiteText ? 'text-white/70 hover:text-white' : ''}
          />
        )}
      </div>
      
      <div className={cn(
        'font-bold',
        sizes[size].value,
        isWhiteText ? 'text-white' : 'text-gray-primary'
      )}>
        {value}
      </div>
    </Card>
  )
}

export default MetricDisplay