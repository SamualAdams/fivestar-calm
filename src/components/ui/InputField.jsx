import React from 'react'
import { cn } from '../../utils/cn'
import Tooltip from './Tooltip'

const InputField = ({ 
  label,
  id,
  type = 'text',
  value,
  onChange,
  placeholder,
  tooltip,
  error,
  required = false,
  disabled = false,
  min,
  max,
  step,
  className = '',
  ...props 
}) => {
  const inputClasses = cn(
    'w-full px-3 py-2 border rounded-md transition-colors duration-200',
    'focus:outline-none focus:ring-2 focus:ring-violet-primary focus:border-transparent',
    'disabled:bg-gray-100 disabled:cursor-not-allowed',
    error 
      ? 'border-red-300 focus:ring-red-500' 
      : 'border-gray-300 hover:border-gray-400',
    className
  )
  
  return (
    <div className="space-y-2">
      {label && (
        <div className="flex items-center gap-2">
          <label 
            htmlFor={id} 
            className="text-sm font-medium text-gray-700"
          >
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
          {tooltip && <Tooltip content={tooltip} />}
        </div>
      )}
      
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        min={min}
        max={max}
        step={step}
        className={inputClasses}
        {...props}
      />
      
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
    </div>
  )
}

export default InputField