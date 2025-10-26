'use client';

import React from 'react';

interface SegmentedControlOption {
  value: string;
  label: string;
}

interface SegmentedControlProps {
  options: SegmentedControlOption[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'rounded' | 'pill';
}

export const SegmentedControl: React.FC<SegmentedControlProps> = ({
  options,
  value,
  onChange,
  className = '',
  size = 'md',
  variant = 'default'
}) => {
  const sizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base'
  };

  const getVariantClasses = (isActive: boolean) => {
    const baseClasses = 'font-medium transition-colors duration-200';
    
    if (variant === 'pill') {
      return `${baseClasses} rounded-full ${
        isActive 
          ? 'text-white shadow-sm' 
          : 'text-gray-300 hover:text-white'
      }`;
    }
    
    if (variant === 'rounded') {
      return `${baseClasses} ${
        isActive 
          ? 'text-white' 
          : 'text-gray-300 hover:text-white'
      }`;
    }
    
    // default variant
    return `${baseClasses} ${
      isActive 
        ? 'text-white' 
        : 'text-gray-300 hover:text-white'
    }`;
  };

  const getContainerClasses = () => {
    const baseClasses = 'flex p-1';
    
    if (variant === 'pill') {
      return `${baseClasses} rounded-full`;
    }
    
    if (variant === 'rounded') {
      return `${baseClasses} rounded-lg`;
    }
    
    // default variant
    return `${baseClasses} rounded-lg`;
  };

  return (
    <div 
      className={`${getContainerClasses()} ${className}`}
      style={{
        width: '614px',
        height: '62px',
        backgroundColor: '#171717',
        borderRadius: '23px',
        padding: '6px',
        gap: '6px'
      }}
    >
      {options.map((option, index) => {
        const isActive = value === option.value;
        const isFirst = index === 0;
        const isLast = index === options.length - 1;
        
        let roundedClasses = '';
        if (variant === 'default' || variant === 'rounded') {
          if (isFirst && isLast) {
            roundedClasses = 'rounded-lg';
          } else if (isFirst) {
            roundedClasses = 'rounded-l-lg';
          } else if (isLast) {
            roundedClasses = 'rounded-r-lg';
          }
        }
        
        return (
          <button
            key={option.value}
            className={`${sizeClasses[size]} ${getVariantClasses(isActive)} ${roundedClasses}`}
            onClick={() => onChange(option.value)}
            style={{
              width: '195px',
              height: '49px',
              backgroundColor: isActive ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
              borderRadius: isActive ? '17px' : (isFirst ? '17px 0 0 17px' : isLast ? '0 17px 17px 0' : '0'),
              boxShadow: isActive ? '13.49px 16.87px 67.47px 8.43px rgba(10, 10, 10, 1)' : 'none'
            }}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
};
