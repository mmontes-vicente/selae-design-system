import React from 'react';
import './Badge.css';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  labelText: string;
  type?: 'success' | 'error' | 'warning' | 'info';
  size?: 'xl' | 'l' | 'm' | 'xs';
}

export const Badge: React.FC<BadgeProps> = ({
  labelText,
  type = 'info',
  size = 'm',
  className = '',
  ...props
}) => {
  return (
    <span className={`selae-badge selae-badge--${type} selae-badge--${size} ${className}`} {...props}>
      {labelText}
    </span>
  );
};

Badge.displayName = 'Badge';
