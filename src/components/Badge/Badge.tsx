import React from 'react';
import './Badge.css';

export type BadgeType = 'success' | 'error' | 'warning' | 'info';
export type BadgeSize = 'xl' | 'l' | 'm' | 'xs';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  labelText: string;
  type?: BadgeType;
  size?: BadgeSize;
}

export const Badge: React.FC<BadgeProps> = ({
  labelText,
  type = 'info',
  size = 'm',
  className = '',
  ...props
}) => {
  const classes = [
    'selae-badge',
    `selae-badge--${type}`,
    `selae-badge--${size}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <span className={classes} data-type={type} data-size={size} {...props}>
      {labelText}
    </span>
  );
};

Badge.displayName = 'Badge';
