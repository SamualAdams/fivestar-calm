import React from 'react'
import Card from '../ui/Card'
import { cn } from '../../utils/cn'

const StatCard = ({ 
  stat,
  title,
  description,
  solution,
  statColor = 'rose-600',
  variant = 'default',
  className = '',
  ...props 
}) => {
  const statColors = {
    'rose-600': 'text-rose-600',
    'violet-primary': 'text-violet-primary',
    'green-primary': 'text-green-primary',
    'blue-500': 'text-blue-500'
  }
  
  return (
    <Card 
      variant={variant} 
      className={cn('max-w-sm mx-auto', className)} 
      {...props}
    >
      <div className="text-center space-y-4">
        <div className={cn(
          'text-5xl font-bold mb-4',
          statColors[statColor]
        )}>
          {stat}
        </div>
        
        <h3 className="text-xl font-semibold text-gray-primary">
          {title}
        </h3>
        
        <p className="text-gray-secondary text-sm leading-relaxed">
          {description}
        </p>
        
        {solution && (
          <div className="bg-gray-50 rounded-xl p-4 mt-6 text-left">
            <h4 className="font-semibold text-indigo-700 mb-2">
              {solution.title}
            </h4>
            <p className="text-gray-700 text-sm leading-relaxed">
              {solution.description}
            </p>
          </div>
        )}
      </div>
    </Card>
  )
}

export default StatCard