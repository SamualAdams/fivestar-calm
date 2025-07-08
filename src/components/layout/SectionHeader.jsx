import React from 'react'
import { cn } from '../../utils/cn'

const SectionHeader = ({ 
  title,
  subtitle,
  description,
  align = 'center',
  spacing = 'default',
  className = '',
  titleClassName = '',
  subtitleClassName = '',
  descriptionClassName = ''
}) => {
  const alignments = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  }
  
  const spacings = {
    sm: 'space-y-3 mb-8',
    default: 'space-y-6 mb-12',
    lg: 'space-y-8 mb-16'
  }
  
  const headerClasses = cn(
    alignments[align],
    spacings[spacing],
    className
  )
  
  return (
    <div className={headerClasses}>
      {title && (
        <h2 className={cn(
          'text-3xl lg:text-4xl font-bold text-gray-primary',
          titleClassName
        )}>
          {title}
        </h2>
      )}
      
      {subtitle && (
        <h3 className={cn(
          'text-xl lg:text-2xl text-gray-secondary font-medium',
          subtitleClassName
        )}>
          {subtitle}
        </h3>
      )}
      
      {description && (
        <p className={cn(
          'text-lg text-gray-secondary max-w-3xl',
          align === 'center' && 'mx-auto',
          descriptionClassName
        )}>
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionHeader