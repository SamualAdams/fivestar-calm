import React from 'react'
import Card from '../ui/Card'
import { cn } from '../../utils/cn'

const FeatureCard = ({ 
  icon: Icon,
  title,
  description,
  variant = 'default',
  iconColor = 'violet-primary',
  className = '',
  ...props 
}) => {
  const iconColors = {
    'violet-primary': 'text-violet-primary bg-violet-primary/10',
    'green-primary': 'text-green-primary bg-green-primary/10',
    'blue-primary': 'text-blue-500 bg-blue-500/10',
    'red-primary': 'text-red-500 bg-red-500/10'
  }
  
  return (
    <Card variant={variant} className={className} {...props}>
      <div className="space-y-4">
        {Icon && (
          <div className={cn(
            'w-12 h-12 rounded-lg flex items-center justify-center',
            iconColors[iconColor]
          )}>
            <Icon className="w-6 h-6" />
          </div>
        )}
        
        {title && (
          <h3 className="text-xl font-semibold text-gray-primary">
            {title}
          </h3>
        )}
        
        {description && (
          <p className="text-gray-secondary leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </Card>
  )
}

export default FeatureCard