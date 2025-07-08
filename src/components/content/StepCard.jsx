import React from 'react'
import { cn } from '../../utils/cn'

const StepCard = ({ 
  number,
  title,
  description,
  showConnector = false,
  isLast = false,
  variant = 'violet',
  className = '',
  ...props 
}) => {
  const variants = {
    violet: {
      number: 'bg-violet-primary text-white',
      connector: 'bg-gray-200'
    },
    green: {
      number: 'bg-green-primary text-white', 
      connector: 'bg-gray-200'
    }
  }
  
  return (
    <div className={cn('text-center space-y-4', className)} {...props}>
      <div className="relative">
        <div className={cn(
          'w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6',
          variants[variant].number
        )}>
          <span className="font-bold text-xl">{number}</span>
        </div>
        
        {showConnector && !isLast && (
          <div className={cn(
            'hidden md:block absolute top-8 left-1/2 w-full h-0.5 transform translate-x-8',
            variants[variant].connector
          )}></div>
        )}
      </div>
      
      <h3 className="text-xl font-semibold text-gray-primary">
        {title}
      </h3>
      
      <p className="text-gray-secondary leading-relaxed">
        {description}
      </p>
    </div>
  )
}

export default StepCard