import React from 'react'
import Card from '../ui/Card'
import { cn } from '../../utils/cn'

const ProblemStatCard = ({ 
  category,
  stat,
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
      <div className="space-y-6">
        {/* Category Label */}
        <div className="text-center">
          <span className="inline-block bg-gray-100 text-gray-600 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
            {category}
          </span>
        </div>
        
        {/* Integrated Stat + Description */}
        <div className="text-center space-y-3">
          <p className="text-gray-700 leading-relaxed">
            <span className={cn(
              'text-4xl font-bold mr-2',
              statColors[statColor]
            )}>
              {stat}
            </span>
            <span className="text-gray-secondary">
              {description}
            </span>
          </p>
        </div>
        
        {/* Solution */}
        {solution && (
          <div className="bg-gray-50 rounded-xl p-4 text-left">
            <h4 className="font-semibold text-indigo-700 mb-2 text-sm">
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

export default ProblemStatCard