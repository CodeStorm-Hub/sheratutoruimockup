import React from 'react';

interface TagProps {
  children: React.ReactNode;
  color?: 'mint' | 'sun' | 'coral' | 'lilac';
  className?: string;
}

export const Tag: React.FC<TagProps> = ({ children, color = 'mint', className = '' }) => {
  return <span className={`tag ${color} ${className}`.trim()}>{children}</span>;
};
