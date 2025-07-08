import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { cn } from '../../utils/cn'

const AccordionItem = ({ 
  question, 
  answer, 
  isOpen, 
  onToggle,
  className = ''
}) => {
  return (
    <div className={cn(
      'bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden',
      className
    )}>
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-gray-primary text-lg">
          {question}
        </span>
        <div className="flex-shrink-0 ml-4">
          {isOpen ? (
            <ChevronUp className="w-5 h-5 text-violet-primary" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-400" />
          )}
        </div>
      </button>
      
      {isOpen && (
        <div className="px-6 pb-4">
          <div className="pt-2 border-t border-gray-100">
            <p className="text-gray-secondary leading-relaxed">
              {answer}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

const Accordion = ({ 
  items = [],
  allowMultiple = false,
  className = '',
  itemClassName = ''
}) => {
  const [openItems, setOpenItems] = useState(allowMultiple ? [] : null)
  
  const handleToggle = (index) => {
    if (allowMultiple) {
      setOpenItems(prev => 
        prev.includes(index) 
          ? prev.filter(i => i !== index)
          : [...prev, index]
      )
    } else {
      setOpenItems(openItems === index ? null : index)
    }
  }
  
  const isOpen = (index) => {
    return allowMultiple ? openItems.includes(index) : openItems === index
  }
  
  return (
    <div className={cn('space-y-4', className)}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={isOpen(index)}
          onToggle={() => handleToggle(index)}
          className={itemClassName}
        />
      ))}
    </div>
  )
}

export default Accordion