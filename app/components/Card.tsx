import React from 'react';

interface CardProps {
  children?: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div 
      className={`rounded-lg shadow-sm ${className}`}
      style={{ 
        backgroundColor: '#363C43',
        width: '720px',
        height: '316px'
      }}
    >
      {children}
    </div>
  );
};
