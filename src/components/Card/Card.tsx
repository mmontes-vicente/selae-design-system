import React from 'react';
import './Card.css';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  theme?: 'light' | 'dark';
}

export const Card: React.FC<CardProps> = ({ title, theme = 'light', children, className = '', ...props }) => {
  return (
    <div className={`selae-card selae-card--${theme} ${className}`} {...props}>
      <h3 className="selae-card-title">{title}</h3>
      <div className="selae-card-body">{children}</div>
    </div>
  );
};

Card.displayName = 'Card';
